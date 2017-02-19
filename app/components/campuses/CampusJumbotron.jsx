import React, { PropTypes } from 'react'
import { Thumbnail, Grid, Row, Col } from 'react-bootstrap'
// ** Rendered by SingleCampus container ** //
// Returns a jumbotron with a campus logo and a page header
const CampusJumbotron = (props) => (
  <Grid className="campus-jumbotron">
    <Row >
      <Col xs={12} sm={5} md={5} lg={5}>
        <Thumbnail
          style={{background: 'none', border: 'none'}}
          className="campus-header-img"
          src={props.campus.image}
          alt={'campus logo'} />
      </Col>
      <Col className="campus-header" xs={12} sm={12} md={7} lg={7}>
        <p>Margaret Hamilton</p>
        <p>Interplanetary Academy of JavaScript</p>
        <h1>{props.campus.name}</h1>
      </Col>
    </Row>
  </Grid>
)

CampusJumbotron.propTypes = {
  campus: PropTypes.object.isRequired
}

export default CampusJumbotron
