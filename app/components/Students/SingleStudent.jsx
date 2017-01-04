import React, { PropTypes } from 'react'
import { Row } from 'react-bootstrap'

// import EditStudentInfo from './Form_EditStudentInfo'
import Student from './Student'

const SingleStudent = (props) => (
  <Row>
    <Student
      student={props.currentStudent}
      campus={props.currentCampus} // need to either fix handleclick, or fix action creator b/c does not exist onClick...
      handleClick={props.handleClick} />
    {/* <EditStudentInfo
         campuses={props.campuses}
    //   handleUpdate={props.handleUpdate}
    //   handleDelete={props.handleDelete} /> */}
  </Row>
)

SingleStudent.propTypes = {
  currentStudent: PropTypes.object.isRequired,
  currentCampus: PropTypes.object.isRequired,
  campuses: PropTypes.array.isRequired,
  // handleUpdate: PropTypes.func.isRequired,
  // handleDelete: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired
}

export default SingleStudent
