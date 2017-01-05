// create, update or delete campus (name, image)

import React, { Component, PropTypes } from 'react'
import { Form, FormGroup, FormControl, HelpBlock, Button, Image } from 'react-bootstrap'
import { updateCampusThenRerenderIt } from '../../reducers/actions/receivingCampuses'

class EditCampusInfoForm extends Component {

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
    const campusInfo = Object.assign({}, this.state) // grab form input val(s)
    this.setState({}) // clear the form
    this.props.dispatch(updateCampusThenRerenderIt(this.props.currentCampus.id, campusInfo)) // update the campus
  }

  render() {
    const loading = this.props.loading

    return (
      <Form onSubmit={this.handleUpdate}>
        <p>{`Edit Campus Profile`}</p>
        <FormGroup
          controlId="name"
          validationState={this.getValidationState()}>
          <FormControl
            type="text"
            value={this.state.name || ''}
            placeholder="Update campus name"
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
            <option>Update Logo</option>
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
          src={ !this.state.image ? '/img/terra.svg' : this.state.image }
          alt={'logo'} />
        <Button
          type="submit"
          bsStyle="primary">
          { loading ?
            `Updating campus ${this.props.currentCampus.name}...` : 'Update Campus'}
        </Button>
      </Form>
    )
  }
}

EditCampusInfoForm.propTypes = {
  currentCampus: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
}

export default EditCampusInfoForm
