// Returns a jumbotron that has a group of campus logos and a large page title

import React, { PropTypes } from 'react'
import { Jumbotron, Image, Row, Col } from 'react-bootstrap'
// ** Rendered by AllStudents container via Students ** //
// Returns a jumbotron with a row of campus logos atop a page title and subtitle
const StudentsJumbotron = (props) => (
  <Jumbotron>
    <Row >
      {props.campuses.map(campus => {
        const numCampuses = props.campuses.length
        const numColumns = 1 * (12 / numCampuses)
        return (
          <Col key={campus.id} xs={numColumns} sm={numColumns} md={numColumns} lg={numColumns}>
            <Image
              src={campus.image}
              alt={'campus logo'}
              responsive={true}
              circle={true}
            />
          </Col>
        )
      })}
    </Row>
    <h1>"Complete Student Roster"</h1>
    <p>"Select a student name to view or edit their profile, or a campus name to view or edit its profile"</p>
  </Jumbotron>
)

StudentsJumbotron.propTypes = {
  campuses: PropTypes.array.isRequired // an array of campuses
}

export default StudentsJumbotron
