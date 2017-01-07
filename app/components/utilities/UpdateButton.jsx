import React, { PropTypes } from 'react'
import { Button } from 'react-bootstrap'

const UpdateButton = (props) => {
  const loading = props.loading
  const objType = props.objType
  const name = props.name
  return (
    <Button
      type="submit"
      bsStyle="primary">
      { loading ?
        `Updating ${objType.toLowerCase()} ${name}...` : `Update ${objType}`}
    </Button>
  )
}

UpdateButton.propTypes = {
  loading: PropTypes.bool.isRequired,
  objType: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

export default UpdateButton
