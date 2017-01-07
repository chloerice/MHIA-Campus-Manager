// Returns a jumbotron that has a group of campus logos and a large page title

import React, { PropTypes } from 'react'
import { Jumbotron, Image, Grid, Row } from 'react-bootstrap'
// ** Rendered by AllStudents container via Students ** //
// Returns a jumbotron with a row of campus logos atop a page title and subtitle
const StudentsJumbotron = (props) => (
  <Grid className="students-header">
    <Row>
      {props.campuses.map(campus => {
        return (
          <Image
            key={campus.id}
            src={campus.image}
            alt={'campus logo'}
            responsive />
        )
      })}
    </Row>
    <h1>Complete Student Roster</h1>
    <p>Select a student name to view or edit their profile, or a campus name to view or edit its profile</p>
  </Grid>
)

StudentsJumbotron.propTypes = {
  campuses: PropTypes.array.isRequired // an array of campuses
}

export default StudentsJumbotron
