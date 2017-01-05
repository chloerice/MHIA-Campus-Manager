// create, update, or delete student (name, email, campusName)
import React, { Component, PropTypes } from 'react'
import { Form, FormGroup, FormControl, HelpBlock, Button } from 'react-bootstrap'
import { updateStudentThenRerenderIt } from '../../reducers/actions/receivingStudents'

class EditStudentInfoForm extends Component {

  constructor(props) {
    super(props)
    this.state = {}

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
    let newState = {},
        target = event.target.id
    newState[target] = event.target.value
    this.setState(newState)
  }

  handleUpdate(event) {
    event.preventDefault() // don't refresh the page, man.
    const studentInfo = Object.assign({}, this.state) // grab form input val(s)
    this.setState({}) // clear the form
    this.props.dispatch(updateStudentThenRerenderIt(this.props.currentStudent.id, studentInfo)) // update the student
  }

  render() {
    const loading = this.props.loading

    return (
      <Form onSubmit={this.handleUpdate}>
        <p>{`Edit Student Profile`}</p>
        <FormGroup
          controlId="name"
          validationState={this.getValidationState()}>
          <FormControl
            type="text"
            value={this.state.name || ''}
            placeholder="Update student name"
            onChange={this.handleChange} />
          <FormControl.Feedback />
          <HelpBlock>Name must be capitalized.</HelpBlock>
        </FormGroup>
        <FormGroup controlId="campusName">
          <FormControl
            componentClass="select"
            type="text"
            value={this.state.campusName}
            onChange={this.handleChange}>
            <option key="defaultSelection">{'Assign a new campus'}</option>
            {
              this.props.campuses.map(campus => {
                return <option key={campus.id} value={campus.name}>{campus.name}</option>
              })
            }
          </FormControl>
        </FormGroup>
        <Button
          type="submit"
          bsStyle="primary">
          { loading ?
            `Updating student ${this.props.currentStudent.name}...` : 'Update Student'}
        </Button>
      </Form>
    )
  }
}

EditStudentInfoForm.propTypes = {
  campuses: PropTypes.array.isRequired,
  currentStudent: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
}

export default EditStudentInfoForm
