import React, { PropTypes } from 'react'
import { Row } from 'react-bootstrap'

import EditStudentInfo from './Form_EditStudentInfo'
import Student from './Student'

const SingleStudent = (props) => (
  <Row>
    <Student
      student={props.currentStudent}
      campuses={props.campuses}
      handleClick={props.handleClick} />
    <EditStudentInfo
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
