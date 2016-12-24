import React, { Component } from 'react'
import { Form, FormGroup, FormControl, HelpBlock } from 'react-bootstrap'

export default class CreateCampus extends Component {

  constructor(props) {
    super(props)
    this.state = Object.assign({
      name: '',
      image: '',
      isLoading: false
    }, this.props)

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

    newState[event.controlId] = event.target.value
    this.setState(newState)
  }

  render() {

    return (
      <Form inline>
        <FormGroup>
          <FormControl
            controlId="name"
            type="text"
            value={this.state.name}
            placeholder="Enter a name"
            onChange={this.handleChange}
            validationState={this.getValidationState()}
          />
          <FormControl.Feedback />
          <HelpBlock>Name must be capitalized.</HelpBlock>
        </FormGroup>
        <FormGroup>
          <FormControl
            componentClass="select"
            controlId="image"
            type="text"
            value={this.state.image}
            placeholder="Select logo to preview"
            onChange={this.handleChange}
          >
            <option value="earth">earth</option>
            <option value="jupiter">jupiter</option>
            <option value="neptune">neptune</option>
            <option value="saturn">saturn</option>
            <option value="venus">venus</option>
          </FormControl>
          <FormControl.Feedback />
        </FormGroup>
      </Form>
    )
  }
}
