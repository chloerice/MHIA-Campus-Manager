import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { Col } from 'react-bootstrap'
// Rendered by SingleStudent
// Returns student a div with student name, email and campus (<--linked)

export const Student = (props) => (
  <Col>
    <h1>Name: {props.name}</h1>
    <h2>Email: {props.email}</h2>
    <h2>Campus: <Link to={`/campuses/${props.campusId}`}>{props.campusName}</Link></h2>
  </Col>
)

Student.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  campusName: PropTypes.string.isRequired,
  campusId: PropTypes.number.isRequired
}
