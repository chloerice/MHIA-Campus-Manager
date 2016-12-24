import React, { PropTypes } from 'react'
import StudentsRoster from '../Students/StudentsRoster'
// Returns student info with link to their campus

const CampusRoster = (props) => {
  return (
    <StudentsRoster showCampusName={false} students={props.students} />
  )
}

CampusRoster.propTypes = {
  students: PropTypes.array.isRequired, // an array of student objects
}

export default CampusRoster
