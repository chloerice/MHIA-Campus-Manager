import React, { Component, PropTypes } from 'react'
import { Form, FormGroup, FormControl, HelpBlock } from 'react-bootstrap'
import { createStudentThenRerenderAll } from '../../reducers/actions/receivingStudents'

import CreateButton from '../utilities/CreateButton'

class CreateNewStudentForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nameVal: {},
      campusNameVal: {}
    }

    this.doubleCheckStudentVals = this.doubleCheckStudentVals.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.getValidationState = this.getValidationState.bind(this)
  }

  getValidationState(name, type) {
    function isCapitalized(word) {
      const upperCase = /[A-Z]/g
      const wordFirstLetter = word.charAt(0)

      if (upperCase.test( wordFirstLetter )) return true
      return false
    }

    if (type === 'campusName') {
      if (!name || name === 'Select a campus') return 'error'
      return 'success'
    }

    if (type === 'studentName') {
      if (name) {
        if (isCapitalized(name)) return 'success'
        else return 'warning'
      }
      return 'error'
    }
  }

  doubleCheckStudentVals() {
    // no submitting w/empty fields!
    if (Object.keys(this.state).length < 2) {
      alert('Both a student name and a campus are required to create a new student.')
      return false
    // no submitting with a validation warning/error(s)!
    } else if (this.getValidationState(this.state.nameVal.name, 'studentName') !== 'success') {
      alert('Please input a capitalized student name.')
      return false
    } else if (this.getValidationState(this.state.campusNameVal.campusName, 'campusName') !== 'success') {
      alert('Please select a campus name.')
      return false
    }
    return true
  }

  handleChange(event) {
    let target = event.target.id,
        newVal = {}
    newVal[target] = event.target.value
    if (target === 'name') this.setState({ nameVal: newVal })
    else this.setState({ campusNameVal: newVal })
  }

  handleSubmit(event) {
    event.preventDefault() // don't refresh the page, man.
    const okayToSubmit = this.doubleCheckStudentVals()
    if (okayToSubmit) {
      // grab form input vals
      const student = {
        name: this.state.nameVal.name,
        campusName: this.state.campusNameVal.campusName
      }
      // clear the form
      this.setState({ nameVal: {}, campusNameVal: {} })
      this.props.dispatch(createStudentThenRerenderAll(student))
    }
  }

  render() {
    const loading = this.props.loading

    return (
      <Form inline onSubmit={this.handleSubmit}>
        <FormGroup
          controlId="name"
          validationState={this.getValidationState(this.state.nameVal.name, 'studentName')}>
          <FormControl
            type="text"
            value={this.state.nameVal.name || ''}
            placeholder="Enter a name"
            onChange={this.handleChange} />
          <FormControl.Feedback />
          <HelpBlock>Name must be capitalized.</HelpBlock>
        </FormGroup>
        <FormGroup
          controlId="campusName"
          validationState={this.getValidationState(this.state.campusNameVal.campusName, 'campusName')}>
          <FormControl
            componentClass="select"
            type="text"
            value={this.state.campusNameVal.campusName || ''}
            onChange={this.handleChange}>
            <option>Select a campus</option>
            {
              this.props.campuses.map(campus => {
                return <option key={campus.id} value={campus.name}>{campus.name}</option>
              })
            }
          </FormControl>
          <HelpBlock>{'A campus must be assigned.'}</HelpBlock>
        </FormGroup>
        <CreateButton
          name={this.state.nameVal.name || ''}
          type={'Student'}
          loading={loading}/>
      </Form>
    )
  }
}

CreateNewStudentForm.propTypes = {
  campuses: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
}

export default CreateNewStudentForm
