import React, { PropTypes } from 'react'
import { Image, Grid, Row, Col } from 'react-bootstrap'
// ** Rendered by SingleCampus container ** //
// Returns a jumbotron with a campus logo and a page header
const CampusJumbotron = (props) => (
  <Grid fluid>
    <Row >
      <Col xs={12} sm={4} md={4} lg={4}>
        <Image
          className="campus-header-img"
          src={props.campus.image}
          alt={'campus logo'}
          responsive />
      </Col>
      <Col className="campus-header" xs={12} sm={12} md={8} lg={8}>
        <p>Margaret Hamilton</p>
        <p>Interplanetary Academy of Javascript</p>
        <h1>{props.campus.name}</h1>
      </Col>
    </Row>
  </Grid>
)

CampusJumbotron.propTypes = {
  campus: PropTypes.object.isRequired
}

export default CampusJumbotron
