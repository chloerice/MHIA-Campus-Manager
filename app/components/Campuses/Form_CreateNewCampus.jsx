import React, { Component, PropTypes } from 'react'
import { Form, FormGroup, FormControl, HelpBlock, Image } from 'react-bootstrap'
import { createCampusThenRerenderAll } from '../../reducers/actions/receivingCampuses'

import CreateButton from '../utilities/CreateButton'

class CreateNewCampusForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nameVal: {},
      imageVal: {}
    }

    this.campusNameIsUnique = this.campusNameIsUnique.bind(this)
    this.doubleCheckCampusVals = this.doubleCheckCampusVals.bind(this)
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
      if (!input || input === 'Select') return 'error'
      return 'success'
    }

    if (type === 'campusName') {
      if (input) {
        if (isCapitalized(input)) return 'success'
        return 'warning'
      }
      return 'error'
    }
  }

  campusNameIsUnique(name) {
    const campusesWithName = this.props.campuses.filter(campus => campus.name === name)
    return campusesWithName.length === 0
  }

  doubleCheckCampusVals() {
    const inputCampusName = this.state.nameVal.name
    const selectedLogo = this.state.imageVal.image

    // no submitting w/empty fields!
    if (!inputCampusName || !selectedLogo) {
      alert('Both a name and a logo are required to create a new campus.')
      return false
      // no submitting with a non-unique campusName!
    } else if (!this.campusNameIsUnique(inputCampusName)) {
      alert(`There is already a campus with the name ${inputCampusName}. Please enter a unique name for the new campus.`)
      return false
      // no submitting with a validation warning/error!
    } else if (this.getValidationState(inputCampusName, 'campusName') !== 'success') {
      alert('Please input a capitalized campus name.')
      return false
    }

    return true
  }

  handleChange(event) {
    let target = event.target.id,
        newVal = {}
    newVal[target] = event.target.value
    if (target === 'name') this.setState({ nameVal: newVal })
    else this.setState({ imageVal: newVal })
  }

  handleSubmit(event) {
    event.preventDefault() // don't refresh the page, man.
    const okayToSubmit = this.doubleCheckCampusVals()
    if (okayToSubmit) {
      const newCampus = {
        name: this.state.nameVal.name,
        image: this.state.imageVal.image
      }
      this.setState({ nameVal: {}, imageVal: {} }) // clear the form
      this.props.dispatch(createCampusThenRerenderAll(newCampus))
    }
  }

  render() {
    let loading = this.props.loading

    return (
      <Form inline onSubmit={this.handleSubmit}>
        <FormGroup
          controlId="name"
          validationState={this.getValidationState(this.state.nameVal.name, 'campusName')}>
          <FormControl
            type="text"
            value={this.state.nameVal.name || ''}
            placeholder="Enter a name"
            onChange={this.handleChange} />
          <FormControl.Feedback />
          <HelpBlock>Name must be capitalized.</HelpBlock>
        </FormGroup>
        <FormGroup
          controlId="image"
          validationState={this.getValidationState(this.state.imageVal.image, 'logoURL')}>
          <FormControl
            componentClass="select"
            type="text"
            value={this.state.imageVal.image || ''}
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
          src={ !this.state.imageVal.image ? '/img/terra.svg' : this.state.imageVal.image }
          alt={'logo'} />
        <CreateButton
          name={this.state.nameVal.name || ''}
          type={'Campus'}
          loading={loading}/>
      </Form>
    )
  }
}

CreateNewCampusForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  campuses: PropTypes.array.isRequired
}

export default CreateNewCampusForm
