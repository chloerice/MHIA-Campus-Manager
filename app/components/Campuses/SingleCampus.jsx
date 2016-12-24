import React, { PropTypes } from 'react'
import { Row } from 'react-bootstrap'

// Components
import CampusJumbotron from './CampusJumbotron'
import CampusRoster from './CampusRoster'
import EditCampusInfo from './Form_EditCampusInfo'
import ReassignStudent from './Form_ReassignStudent'

const SingleCampus = (props) => (
  <div>
    <Row>
      <CampusJumbotron campus={props.currentCampus} />
      <CampusRoster students={props.students} />
    </Row>
    <Row>
      <EditCampusInfo
        handleDelete={props.handleDelete}
        handleUpdate={props.handleUpdate}
      />
    <ReassignStudent handleReassign={props.handleReassign} />
    </Row>
  </div>
)

SingleCampus.propTypes = {
  students: PropTypes.array.isRequired,
  currentCampus: PropTypes.object.isRequired,
  handleUpdate: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleReassign: PropTypes.func.isRequired
}

export default SingleCampus
