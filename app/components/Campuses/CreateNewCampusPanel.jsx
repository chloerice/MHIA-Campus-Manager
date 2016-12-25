import React, { Component } from 'react'
import { render } from 'react-dom'
import { Panel, Button } from 'react-bootstrap'

import CreateNewCampusForm from './Form_CreateNewCampus'
// rendered by Campuses
// returns a 'primary' button with onClick that toggles the panel housing the
// Create New Campus form

export class CreateNewCampusPanel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false
    }

    this.toggleForm = this.toggleForm.bind(this)
  }

  toggleForm() {
    this.setState({ open: !this.state.open })
  }

  render() {
    return (
      <div>
        <Button onClick={this.toggleForm}>
          Create New Campus
        </Button>
        <Panel collapsible={true} expanded={this.state.open}>
          <CreateNewCampusForm />
        </Panel>
      </div>
    )
  }
}
