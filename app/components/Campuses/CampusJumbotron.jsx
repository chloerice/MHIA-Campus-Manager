import React, { PropTypes } from 'react'
import { Jumbotron, Image, Row, Col } from 'react-bootstrap'
// ** Rendered by SingleCampus container ** //
// Returns a jumbotron with a campus logo and a page header
const CampusJumbotron = (props) => (
  <Jumbotron>
    <Row >
      <Col xs={12} sm={4} md={4} lg={4}>
        <Image
          src={props.campus.image}
          alt={'campus logo'}
          responsive={true}
          circle={true}
        />
      </Col>
      <Col >
        <p>"Margaret Hamilton"</p>
        <p>"Interplanetary Academy of Javascript"</p>
        <h1>{props.campus.name}</h1>
      </Col>
    </Row>
  </Jumbotron>
)

CampusJumbotron.propTypes = {
  campus: PropTypes.object.isRequired
}

export default CampusJumbotron
