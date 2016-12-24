import React, { PropTypes } from 'react'
import { Link } from 'react-router'
// Rendered by
// Returns student a table row with student name, email and campus (<--linked)

export const Student = (props) => (
  <div>
    <h1>Name: {props.name}</h1>
    <h2>Email: {props.email}</h2>
    <h2>Campus: <Link to={`/campuses/${props.campusId}`}>{props.campusName}</Link></h2>
  </div>
)

Student.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  campusName: PropTypes.string.isRequired,
  campusId: PropTypes.number.isRequired
}
