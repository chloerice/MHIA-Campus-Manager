import React, { PropTypes } from 'react'
import { Jumbotron, Grid, Row } from 'react-bootstrap'
import { Link } from 'react-router'

import Campus from './Campus'
import CreateNewCampus from '../utilities/CreateNew_Panel'

const AllCampuses = (props) => (
  <Jumbotron>
    <Grid>
      <Row id="campus-list">
        { props.campuses.map(campus => (
            <Link
              key={campus.id}
              to={`/campuses/${campus.id}`}>
                <Campus campus={campus} />
            </Link>
          )) }
      </Row>
      <CreateNewCampus
        campuses={props.campuses}
        instance={'Campus'}
        loading={props.loading}
        dispatch={props.dispatch} />
    </Grid>
  </Jumbotron>
)

AllCampuses.propTypes = {
  campuses: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
}

export default AllCampuses
