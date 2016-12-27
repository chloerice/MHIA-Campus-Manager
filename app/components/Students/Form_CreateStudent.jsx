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

  getValidationState() {
    const name = this.state.name
    const upperCase = /([A-Z])\w+/g
    if ( upperCase.test(name.charAt(0)) ) return 'success'
    else return 'error'
  }

  handleChange(event) {
    let newState;

    newState[event.controlId] = {
      name: event.target.value,
    }
    this.setState(newState)
  }

  handleSubmit(event) {
    event.preventDefault();
    const student = {
      name: this.state.name,
      campusName: this.state.campus
    }
    this.props.dispatch(createStudentThenRerenderAll(student))
  }

  render() {
    const loading = this.props.loading

    return (
      <Form inline>
        <FormGroup>
          <FormControl
            controlId="name"
            type="text"
            value={this.state.name}
            placeholder="Enter a name"
            onChange={this.handleChange}
            validationState={this.getValidationState()}/>
          <FormControl.Feedback />
          <HelpBlock>Name must be capitalized.</HelpBlock>
        </FormGroup>
        <FormGroup>
          <FormControl
            componentClass="select"
            controlId="campusName"
            type="text"
            value={this.state.campusName}
            placeholder="Select to a campus"
            onChange={this.handleChange}>
            {
              this.props.campuses.map(campus => {
                return <option key={campus.id} value={campus.name}>{campus.name}</option>
              })
            }
          </FormControl>
        </FormGroup>
        <Button
          type="submit"
          bsStyle="primary"
          onSubmit={this.handleSubmit}>
          { loading ?
            `Saving new student ${this.state.name}...` : 'Save New Student'}
        </Button>
      </Form>
    )
  }
}

CreateNewStudentForm.propTypes = {
  campuses: PropTypes.object.isRequired,
  dispatch: PropTypes.func,
  loading: PropTypes.bool,
}

export default CreateNewStudentForm
