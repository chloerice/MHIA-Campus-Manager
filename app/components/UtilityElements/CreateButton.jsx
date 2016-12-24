import React, { PropTypes } from 'react'
import { Button } from 'react-bootstrap'

// rendered by Campuses
// returns a 'primary' button with onClick that toggles Create New Campus form

const CreateButton = (props) => (
  <Button onClick={props.onClick}>
    Create New Campus
  </Button>
)

CreateButton.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default CreateButton
