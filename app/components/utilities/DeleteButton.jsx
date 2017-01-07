import React, { PropTypes } from 'react'
import { Button } from 'react-bootstrap'

const DeleteButton = (props) => {
  const loading = props.loading
  const objType = props.objType
  const name = props.name
  return (
    <Button
      bsStyle="danger">
      { loading ?
        `Deleting ${objType.toLowerCase()} ${name}...` : `Delete ${objType}`}
    </Button>
  )
}

DeleteButton.propTypes = {
  loading: PropTypes.bool.isRequired,
  objType: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default DeleteButton
