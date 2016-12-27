import React, { PropTypes } from 'react'

import StudentsJumbotron from './StudentsJumbotron'
import StudentTable from '../utilities/StudentTable'
import CreateStudent from './Form_CreateStudent'

// ** Rendered by AllStudents container ** //

const Students = (props) => (
  <div>
    <StudentsJumbotron campuses={props.campuses} />
    <StudentTable
      students={props.students}
      campuses={props.campuses}
      showCampusName={true}
      handleClick={props.handleClick} />
    <CreateStudent />
  </div>
)

Students.propTypes = {
  students: PropTypes.array.isRequired, // an array of student objects
  campuses: PropTypes.array.isRequired, // an array of campus objects
  handleClick: PropTypes.func.isRequired
}

export default Students
