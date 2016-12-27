import React, { PropTypes } from 'react'
import { Row } from 'react-bootstrap'

import EditCampusInfo from './Form_EditCampusInfo'
import Student from './Student'

const SingleStudent = (props) => (
  <Row>
    <Student
      student={props.currentStudent}
      campuses={props.campuses}
      handleClick={props.handleClick} />
    <EditCampusInfo
      handleUpdate={props.handleUpdate}
      handleDelete={props.handleDelete} />
  </Row>
)

SingleStudent.propTypes = {
  currentStudent: PropTypes.object.isRequired,
  campuses: PropTypes.array.isRequired,
  handleUpdate: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired
}

export default SingleStudent
