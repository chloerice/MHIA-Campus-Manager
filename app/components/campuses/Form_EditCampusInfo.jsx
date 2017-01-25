// create, update or delete campus (name, image)

import React, { Component, PropTypes } from 'react'
import { Form, FormGroup, FormControl, HelpBlock, Image } from 'react-bootstrap'
import { updateCampusThenRerenderIt } from '../../reducers/actions/receivingCampuses'

import UpdateButton from '../utilities/UpdateButton'

class EditCampusInfoForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      nameVal: {},
      imageVal: {}
    }

    this.campusNameIsUnique = this.campusNameIsUnique.bind(this)
    this.doubleCheckUpdateVals = this.doubleCheckUpdateVals.bind(this)
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

    if (this.state.nameVal.name) {
      if (isCapitalized(this.state.nameVal.name)) return 'success'
      else return 'warning'
    }
    return null // don't validate if no name has been input
  }

  handleChange(event) {
    let target = event.target.id,
        newVal = {}
    newVal[target] = event.target.value
    if (target === 'name') {
      this.setState({ nameVal: newVal })
    } else if (
      target === 'image' &&
      event.target.value !== 'Update Logo') {
      this.setState({ imageVal: newVal })
    }
  }

  campusNameIsUnique(name) {
    const campusesWithName = this.props.campuses.filter(campus => campus.name === name)
    return campusesWithName.length === 0
  }

  doubleCheckUpdateVals() {
    const inputCampusName = this.state.nameVal.name
    const selectedLogo = this.state.imageVal.image

    // no submitting w/ an empty form!
    if (inputCampusName === undefined && selectedLogo === undefined) {
      alert('A name or a logo are required to update the campus.')
      return false
    }
    // no submitting with a non-unique campusName!
    if (inputCampusName !== undefined) {
      if (!this.campusNameIsUnique(inputCampusName)) {
        alert(`There is already a campus with the name ${inputCampusName}. Please enter a unique name for updating the campus.`)
        this.setState({ nameVal: {} })
        return false
      // no submitting with a validation warning/error!
      } else if (this.getValidationState(inputCampusName, 'campusName') !== 'success') {
        alert('Please input a capitalized campus name.')
        this.setState({ nameVal: {} })
        return false
      }
    }

    return true
  }

  handleUpdate(event) {
    event.preventDefault() // don't refresh the page, man.
    const inputCampusName = this.state.nameVal.name
    const selectedLogo = this.state.imageVal.image
    const okayToSubmit = this.doubleCheckUpdateVals()

    if (okayToSubmit) {
      // grab form input val(s)
      let campusInfo = {}
      if (inputCampusName && inputCampusName !== '') {
        campusInfo.name = inputCampusName
      } else if (selectedLogo) {
        campusInfo.image = selectedLogo
      }
      // clear the form
      this.setState({ nameVal: {}, imageVal: {} })
      this.props.updateCampus(updateCampusThenRerenderIt(this.props.currentCampus.id, campusInfo))
    }
  }

  render() {

    return (
      <Form onSubmit={this.handleUpdate}>
        <p>Edit Campus Profile</p>
        <FormGroup
          controlId="name"
          validationState={this.getValidationState()}>
          <FormControl
            type="text"
            value={this.state.nameVal.name || ''}
            placeholder="Update campus name"
            onChange={this.handleChange} />
          <FormControl.Feedback />
          <HelpBlock>Name must be capitalized.</HelpBlock>
        </FormGroup>
        <FormGroup controlId="image">
          <FormControl
            componentClass="select"
            type="text"
            value={this.state.imageVal.image || ''}
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
          src={ !this.state.imageVal.image ? '/img/terra.svg' : this.state.imageVal.image }
          alt={'logo'} />
        <UpdateButton
          loading={this.props.loading}
          objType={'Campus'}
          name={this.props.currentCampus.name || ''}/>
      </Form>
    )
  }
}

EditCampusInfoForm.propTypes = {
  campuses: PropTypes.array.isRequired,
  currentCampus: PropTypes.object.isRequired,
  updateCampus: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
}

export default EditCampusInfoForm
