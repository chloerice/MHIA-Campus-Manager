import React, { PropTypes } from 'react'
import { Col, Image } from 'react-bootstrap'
import { Link } from 'react-router'
// Returns a linked div with campus logo and name center aligned vertically
// that onClick renders the campus' profile page
const Campus = (props) => {
  const campus = props.campus
  return (
    <Link to={`/campuses/${campus.id}`} onClick={() => props.handleClick(campus, 'campus')}>
      <Col xs={12} sm={6} md={6} lg={6}>
        <Image
          src={campus.image}
          alt={`${campus.name} campus logo`}
          rounded={true}
          responsive={true}
        />
      <h2>{campus.name}</h2>
      </Col>
    </Link>
  )
}

Campus.propTypes = {
  campus: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired
}

export default Campus
