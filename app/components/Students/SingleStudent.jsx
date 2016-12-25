import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { Row } from 'react-bootstrap'

import Student from './Student'

const SingleStudent = (props) => (
  <Student
    name={props.currentStudent.name}
  />
)

SingleStudent.propTypes = {
  currentStudent: PropTypes.object.isRequired
}

export default SingleStudent
