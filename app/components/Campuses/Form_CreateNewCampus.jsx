import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import { Form, FormGroup, FormControl, HelpBlock, Button } from 'react-bootstrap'

export default class CreateNewCampusForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      image: {
        url: '',
        name: ''
      },
      isLoading: false
    }

    this.handleChange = this.handleChange.bind(this)
    this.updateStateAndHandleSubmit = this.updateStateAndHandleSubmit.bind(this)
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
      url: event.target.value,
      name: event.target.text
    }
    this.setState(newState)
  }

  updateStateAndHandleSubmit(event) {
    this.setState({isLoading: true})
    this.props.handleSubmit(event)
  }

  render() {
    const isLoading = this.state.isLoading

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
            placeholder="Select to preview logo"
            onChange={this.handleChange}
          >
            <option value="/public/img/earth.svg">Earth</option>
            <option value="/public/img/jupiter.svg">Jupiter</option>
            <option value="/public/img/neptune.svg">Neptune</option>
            <option value="/public/img/saturn.svg">Saturn</option>
            <option value="/public/img/venus.svg">Venus</option>
          </FormControl>
          <Image
            thumbnail={true}
            src={this.state.image.url}
            alt={`${this.state.image.name} logo`}
          />
        </FormGroup>
        <Button
          type="submit"
          bsStyle="primary"
          onSubmit={this.updateStateAndHandleSubmit}>
          { isLoading ?
            `Saving new campus ${this.state.name}...` : 'Save New Campus'}
        </Button>
      </Form>
    )
  }
}

CreateNewCampusForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
}
