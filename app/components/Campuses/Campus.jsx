import React, { PropTypes } from 'react'
import { Col, Image } from 'react-bootstrap'
import { Link } from 'react-router'
// Returns a linked div with campus logo and name center aligned vertically
// that onClick renders the campus' profile page
const Campus = (props) => {
  return (
    <Link to={`/campuses/${props.id}`}>
      <Col xs={12} sm={6} md={6} lg={6}>
        <Image
          src={props.image}
          alt={`${props.name} campus logo`}
          rounded={true}
          responsive={true}
        />
        <h2>{props.name}</h2>
      </Col>
    </Link>
  )
}

Campus.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
}

export default Campus
