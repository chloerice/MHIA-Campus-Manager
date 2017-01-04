import React, { Component, PropTypes } from 'react'
import { Form, FormGroup, FormControl, HelpBlock, Button, Image } from 'react-bootstrap'
import { createCampusThenRerenderAll } from '../../reducers/actions/receivingCampuses'

class CreateNewCampusForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      image: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.getValidationState = this.getValidationState.bind(this)
  }

  getValidationState(input, type) {
    function isCapitalized(word) {
      const upperCase = /[A-Z]/g
      const wordFirstLetter = word.charAt(0)

      if (upperCase.test( wordFirstLetter )) return true
      return false
    }

    if (type === 'logoURL') {
      if (!input.length) return 'error'
      return 'success'
    }

    if (type === 'campusName') {
      if (input.length) {
        if (isCapitalized(input)) return 'success'
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
    event.preventDefault();
    const campus = Object.assign({}, this.state)
    this.setState({name: '', image: ''}) // clear the form
    this.props.dispatch(createCampusThenRerenderAll(campus))
  }

  render() {
    const loading = this.props.loading

    return (
      <Form inline onSubmit={this.handleSubmit}>
        <FormGroup
          controlId="name"
          validationState={this.getValidationState(this.state.name, 'campusName')}>
          <FormControl
            type="text"
            value={this.state.name}
            placeholder="Enter a name"
            onChange={this.handleChange} />
          <FormControl.Feedback />
          <HelpBlock>Name must be capitalized.</HelpBlock>
        </FormGroup>
        <FormGroup
          controlId="image"
          validationState={this.getValidationState(this.state.image, 'logoURL')}>
          <FormControl
            componentClass="select"
            type="text"
            value={this.state.image}
            onChange={(event) => this.handleChange(event)}>
            <option>Select</option>
            <option value="/img/terra.svg">Terra</option>
            <option value="/img/jupiter.svg">Jupiter</option>
            <option value="/img/neptune.svg">Neptune</option>
            <option value="/img/saturn.svg">Saturn</option>
            <option value="/img/venus.svg">Venus</option>
            <option value="/img/pluto.svg">Pluto</option>
            <option value="/img/titan.svg">Titan</option>
            <option value="/img/luna.svg">Luna</option>
            <option value="/img/mars.svg">Mars</option>
          </FormControl>
          <HelpBlock>Select to preview logo.</HelpBlock>
        </FormGroup>
        <Image
          thumbnail
          src={ !this.state.image.length ? '/img/terra.svg' : this.state.image }
          alt={'logo'} />
        <Button
          className="btn-submit"
          type="submit"
          bsStyle="primary">
          { loading ?
            `Saving new campus ${this.state.name}...` : 'Save New Campus'}
        </Button>
      </Form>
    )
  }
}

CreateNewCampusForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
}

export default CreateNewCampusForm
