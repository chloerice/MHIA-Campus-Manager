import React, { Component, PropTypes } from 'react'
import { Form, FormGroup, FormControl, HelpBlock, Button } from 'react-bootstrap'
import { createCampusThenRerenderAll } from '../../reducers/actions/receivingCampuses'

class CreateNewCampusForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      image: {
        url: '',
        name: ''
      }
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
      url: event.target.value,
      name: event.target.text
    }
    this.setState(newState)
  }

  handleSubmit(event) {
    event.preventDefault();
    const campus = {
      name: this.state.name,
      image: this.state.image.url
    }
    this.props.dispatch(createCampusThenRerenderAll(campus))
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
          onSubmit={this.handleSubmit}>
          { loading ?
            `Saving new campus ${this.state.name}...` : 'Save New Campus'}
        </Button>
      </Form>
    )
  }
}

CreateNewCampusForm.propTypes = {
  dispatch: PropTypes.func,
  loading: PropTypes.bool,
  handleSubmit: PropTypes.func.isRequired,
}

export default CreateNewCampusForm
