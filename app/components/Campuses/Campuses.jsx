import React, { PropTypes } from 'react'
import { Row } from 'react-bootstrap'

//actions

//components
import Campus from './Campus'
import CreateNewCampusPanel from './CreateNewCampusPanel'

const Campuses = (props) => (
  <div>
    <Row>
      { props.campuses.map(campus => {
          return (
            <Campus
              key={campus.id}
              id={campus.id}
              name={campus.name}
              image={campus.image}
            />
          )
        })
      }
    </Row>
    <CreateNewCampusPanel />
  </div>
)

Campuses.propTypes = {
  campuses: PropTypes.array.isRequired,
}

export default Campuses
