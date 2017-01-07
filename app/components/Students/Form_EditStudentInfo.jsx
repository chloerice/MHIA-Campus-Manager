// create, update, or delete student (name, email, campusName)
import React, { Component, PropTypes } from 'react'
import { Form, FormGroup, FormControl, HelpBlock } from 'react-bootstrap'
import { updateStudentThenRerenderIt } from '../../reducers/actions/receivingStudents'

import UpdateButton from '../utilities/UpdateButton'

class EditStudentInfoForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      values: {}
    }

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

    if (this.state.name) {
      if (isCapitalized(this.state.name)) return 'success'
      else return 'error'
    }
    return null // don't validate if no name has been input
  }

  handleChange(event) {
    let newVals = {},
        target = event.target.id,
        value = event.target.value
    if (value !== 'Assign a new campus') {
      newVals[target] = value
    }
    this.setState({ values: newVals })
  }

  handleUpdate(event) {
    event.preventDefault() // don't refresh the page, man.
    const studentInfo = Object.assign({}, this.state.values) // grab form input val(s)
    this.setState({ values: {} }) // clear the form
    this.props.dispatch(updateStudentThenRerenderIt(this.props.currentStudent.id, studentInfo)) // update the student
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
            value={this.state.values.name || ''}
            placeholder="Update student name"
            onChange={this.handleChange} />
          <FormControl.Feedback />
          <HelpBlock>Name must be capitalized.</HelpBlock>
        </FormGroup>
        <FormGroup controlId="campusName">
          <FormControl
            componentClass="select"
            type="text"
            value={this.state.values.campusName}
            onChange={this.handleChange}>
            <option>{'Assign a new campus'}</option>
            {
              this.props.campuses.map(campus => {
                return <option key={campus.id} value={campus.name}>{campus.name}</option>
              })
            }
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
  dispatch: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
}

export default EditStudentInfoForm
