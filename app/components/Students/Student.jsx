import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { Image, Row, Col } from 'react-bootstrap'

// Rendered by SingleStudent
// Returns a div with student name, email and campus (<--linked) below the
// student's campus' logo

const Student = (props) => {
  const student = props.student
  const studentCampus = props.campuses.filter(campus => campus.id === student.campusId)[0]

  return (
    <Col xs={12} sm={12} md={8} lg={8} >
      <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
          <Image src={studentCampus.image} alt={`${studentCampus.name} campus logo`}/>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
          <h1>{student.name}</h1>
          <h2>{student.email}</h2>
          <h2>
            <Link
              to={`/campuses/${studentCampus.id}`}
              onClick={(event) => props.handleClick(event, studentCampus.id, 'campus')}>
              {student.campusName}
            </Link>
          </h2>
        </Col>
      </Row>
    </Col>
  )
}

Student.propTypes = {
  student: PropTypes.object.isRequired,
  campuses: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired
}

export default Student
