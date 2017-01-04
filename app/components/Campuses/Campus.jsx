import React, { PropTypes } from 'react'
import { Col, Thumbnail } from 'react-bootstrap'
import { Link } from 'react-router'
// Returns a linked div with campus logo and name center aligned vertically
// that onClick renders the campus' profile page
const Campus = (props) => {
  const campus = props.campus
  return (
    <Col xs={6} sm={6} md={6} lg={6}>
      <Thumbnail
        className="campus-list-img"
        src={campus.image}
        alt={`${campus.name} campus logo`}>
        <Link
          to={`/campuses/${campus.id}`}>
          <h2>
            {campus.name}
          </h2>
        </Link>
      </Thumbnail>
    </Col>
  )
}

Campus.propTypes = {
  campus: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired
}

export default Campus
