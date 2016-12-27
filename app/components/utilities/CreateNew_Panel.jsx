import React, { Component, PropTypes } from 'react'
import { Panel, Button } from 'react-bootstrap'

import CreateNewCampusForm from '../components/campuses/Form_CreateNewCampus'
import CreateNewStudentForm from '../components/students/Form_CreateStudent'
// Rendered by AllCampuses and AllStudents
// Returns a 'primary' button with onClick that toggles the panel housing the form

class CreateNew extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
    this.whichForm = this.whichForm.bind(this)
    this.toggleForm = this.toggleForm.bind(this)
  }

  toggleForm(event) {
    event.preventDefault()
    this.setState({ open: !this.state.open })
  }

  whichForm() {
    if (this.props.instance === 'Campus') return <CreateNewCampusForm {...this.props}/>
    else return <CreateNewStudentForm {...this.props}/>
  }

  render() {
    return (
      <div>
        <Button onClick={this.toggleForm}>
          {`Create New ${this.props.instance}`}
        </Button>
        <Panel collapsible={true} expanded={this.state.open}>
          { this.whichForm() }
        </Panel>
      </div>
    )
  }
}

CreateNew.propTypes = {
  campuses: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
  instance: PropTypes.string.isRequired,
}

export default CreateNew
