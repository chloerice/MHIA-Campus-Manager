import React, { PropTypes } from 'react'
import { Button } from 'react-bootstrap'

const CreateButton = (props) => {
  const loading = props.loading
  const name = props.name
  const type = props.type

  return (
    <Button
      className="btn-submit"
      type="submit"
      bsStyle="primary">
      { loading ?
        `Saving new ${type.toLowerCase()} ${name}...` : `Save New ${type}`}
    </Button>
  )
}

CreateButton.propTypes = {
  loading: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
}

export default CreateButton
