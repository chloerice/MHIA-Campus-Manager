import React, { PropTypes } from 'react'
import { Row } from 'react-bootstrap'

//actions

//components
import Campus from './Campus'
import CreateNewCampusPanel from './CreateNewCampusPanel'

const AllCampuses = (props) => (
  <div>
    <Row>
      { props.campuses.map(campus => {
          return (
            <Campus campus={campus} handleClick={props.handleClick} />
          )
        })
      }
    </Row>
    <CreateNewCampusPanel
      campuses={props.campuses}
      instance={'Campus'}
      loading={props.loading}
      dispatch={props.dispatch} />
  </div>
)

AllCampuses.propTypes = {
  campuses: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired
}

export default AllCampuses
