import React, { Component, PropTypes } from 'react'
import { Form, FormGroup, FormControl, HelpBlock, Button } from 'react-bootstrap'
import { createStudentThenRerenderAll } from '../../reducers/actions/receivingStudents'

class CreateNewStudentForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      campusName: ''
    }

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
      if (!name.length) return 'error'
      return 'success'
    }

    if (type === 'studentName') {
      if (name.length) {
        if (isCapitalized(name)) return 'success'
        else return 'warning'
      } else {
        return null // don't validate if no name has been input
      }
    }
  }

  handleChange(event) {
    let newState = {},
        target = event.target.id
    newState[target] = event.target.value
    this.setState(newState)
  }

  handleSubmit(event) {
    event.preventDefault() // don't refresh the page, man.
    const student = Object.assign({}, this.state) // grab form input vals
    this.setState({name: '', campusName: ''}) // clear the form
    this.props.dispatch(createStudentThenRerenderAll(student)) // create the student
  }

  render() {
    const loading = this.props.loading

    return (
      <Form inline onSubmit={this.handleSubmit}>
        <FormGroup
          controlId="name"
          validationState={this.getValidationState(this.state.name, 'studentName')}>
          <FormControl
            type="text"
            value={this.state.name}
            placeholder="Enter a name"
            onChange={this.handleChange} />
          <FormControl.Feedback />
          <HelpBlock>Name must be capitalized.</HelpBlock>
        </FormGroup>
        <FormGroup
          controlId="campusName"
          validationState={this.getValidationState(this.state.campusName, 'campusName')}>
          <FormControl
            componentClass="select"
            type="text"
            value={this.state.campusName}
            onChange={this.handleChange}>
            <option key="defaultSelection">Select a campus</option>
            {
              this.props.campuses.map(campus => {
                return <option key={campus.id} value={campus.name}>{campus.name}</option>
              })
            }
          </FormControl>
          <HelpBlock>A campus must be assigned.</HelpBlock>
        </FormGroup>
        <Button
          type="submit"
          bsStyle="primary">
          { loading ?
            `Saving new student ${this.state.name}...` : 'Save New Student'}
        </Button>
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
