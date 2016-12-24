import React, { PropTypes } from 'react'

import StudentsJumbotron from './StudentsJumbotron'
import StudentsRoster from './StudentsRoster'
import CreateStudent from './Form_CreateStudent'

// ** Rendered by AllStudents container ** //

const Students = (props) => (
  <div>
    <StudentsJumbotron campuses={props.campuses} />
    <StudentsRoster students={props.students} />
    <CreateStudent />
  </div>
)

Students.propTypes = {
  students: PropTypes.array.isRequired, // an array of student objects
  campuses: PropTypes.array.isRequired // an array of campus objects
}

export default Students
