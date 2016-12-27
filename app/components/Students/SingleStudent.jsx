import React, { PropTypes } from 'react'
import { Row } from 'react-bootstrap'

import EditCampusInfo from './Form_EditCampusInfo'
import Student from './Student'

const SingleStudent = (props) => (
  <Row>
    <Student student={props.currentStudent} />
    <EditCampusInfo />
  </Row>
)

SingleStudent.propTypes = {
  currentStudent: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired
}

export default SingleStudent
