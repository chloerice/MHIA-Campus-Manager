// create, update, or delete student (name, email, campusName)
import React, { Component, PropTypes } from 'react'
import { Form, FormGroup, FormControl, HelpBlock } from 'react-bootstrap'

import UpdateButton from '../utilities/UpdateButton'

class EditStudentInfoForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      nameVal: {},
      campusNameVal: {}
    }

    this.doubleCheckUpdateVals = this.doubleCheckUpdateVals.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
    this.getValidationState = this.getValidationState.bind(this)
  }

  getValidationState() {
    function isCapitalized(word) {
      const upperCase = /[A-Z]/g
      const wordFirstLetter = word.charAt(0)

      if (upperCase.test( wordFirstLetter )) return true
      return false
    }

    if (this.state.nameVal.name) {
      if (isCapitalized(this.state.nameVal.name)) return 'success'
      else return 'warning'
    }
    return null // don't validate if no name has been input
  }

  handleChange(event) {
    let target = event.target.id,
        newVal = {}
    newVal[target] = event.target.value

    if (target === 'name') {
      this.setState({ nameVal: newVal })
    } else if (
      target === 'campusName' &&
      event.target.value !== 'Assign a new campus') {
      this.setState({ campusNameVal: newVal })
    }
  }

  doubleCheckUpdateVals() {
    const selectedCampusName = this.state.campusNameVal.campusName
    const inputStudentName = this.state.nameVal.name
    // no updating w/ an empty form!
    if (inputStudentName === undefined && selectedCampusName === undefined) {
      alert('A new student name or campus is required to update the student.')
      return false
    } else if (inputStudentName !== undefined) {
      // no updating with a validation warning/error!
      if (this.getValidationState(inputStudentName, 'studentName') !== 'success') {
        alert('Please input a capitalized student name.')
        this.setState({ nameVal: {} })
        return false
      }
    }

    return true
  }

  handleUpdate(event) {
    event.preventDefault() // don't refresh the page, man.

    const selectedCampusName = this.state.campusNameVal.campusName
    const inputStudentName = this.state.nameVal.name
    const okayToSubmit = this.doubleCheckUpdateVals()

    if (okayToSubmit) {
      // grab form input val(s)
      let studentInfo = {}
      if (inputStudentName && inputStudentName !== '') {
        studentInfo.name = inputStudentName
      } else if (selectedCampusName) {
        studentInfo.campusName = selectedCampusName
      }
      // clear the form
      this.setState({ nameVal: {}, campusNameVal: {} })
      this.props.updateStudent(this.props.currentStudent.id, studentInfo)
    }
  }

  render() {

    return (
      <Form onSubmit={this.handleUpdate}>
        <p>{`Edit Student Profile`}</p>
        <FormGroup
          controlId="name"
          validationState={this.getValidationState()}>
          <FormControl
            type="text"
            value={this.state.nameVal.name || ''}
            placeholder="Update student name"
            onChange={this.handleChange} />
          <FormControl.Feedback />
          <HelpBlock>Name must be capitalized.</HelpBlock>
        </FormGroup>
        <FormGroup controlId="campusName">
          <FormControl
            componentClass="select"
            type="text"
            value={this.state.campusNameVal.campusName || ''}
            onChange={this.handleChange}>
            <option value={undefined}>{'Assign a new campus'}</option>
            { this.props.campuses.map(campus => {
                return <option key={campus.id} value={campus.name}>{campus.name}</option>
              }) }
          </FormControl>
        </FormGroup>
        <UpdateButton
          loading={this.props.loading}
          objType={'Student'}
          name={this.props.currentStudent.name || ''}/>
      </Form>
    )
  }
}

EditStudentInfoForm.propTypes = {
  campuses: PropTypes.array.isRequired,
  currentStudent: PropTypes.object.isRequired,
  updateStudent: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
}

export default EditStudentInfoForm
