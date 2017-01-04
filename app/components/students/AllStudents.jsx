import React, { PropTypes } from 'react'
import { Col } from 'react-bootstrap'

import StudentsJumbotron from './StudentsJumbotron'
import StudentTable from '../utilities/StudentTable'
import CreateNewStudent from '../utilities/CreateNew_Panel'

// ** Rendered by AllStudents container ** //

const AllStudents = (props) => (
  <div>
    <StudentsJumbotron campuses={props.campuses} />
    <Col className="students-table" xs={12} sm={12} md={12} lg={12}>
      <StudentTable
        students={props.students}
        campuses={props.campuses}
        showCampusName={true}
        handleClick={props.handleClick} />
    </Col>
    <CreateNewStudent
      campuses={props.campuses}
      loading={props.loading}
      instance={'Student'}
      dispatch={props.dispatch} />
  </div>
)

AllStudents.propTypes = {
  students: PropTypes.array.isRequired, // an array of student objects
  campuses: PropTypes.array.isRequired, // an array of campus objects
  loading: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired
}

export default AllStudents
