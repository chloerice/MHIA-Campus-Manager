import React, { PropTypes } from 'react'
import { Row } from 'react-bootstrap'

import CampusJumbotron from './CampusJumbotron'
import StudentTable from '../utilities/StudentTable'
// import EditCampusInfo from './Form_EditCampusInfo'
// import ReassignStudent from './Form_ReassignStudent'

const SingleCampus = (props) => (
  <div className="container-fluid">
    <Row>
      <CampusJumbotron campus={props.currentCampus} />
      <StudentTable
        students={props.students}
        campuses={props.campuses}
        showCampusName={false}
        handleClick={props.handleClick} />
    </Row>
    <Row>
      {/* <EditCampusInfo
        handleDelete={props.handleDelete}
        handleUpdate={props.handleUpdate}/>
      <ReassignStudent handleReassign={props.handleReassignment} /> */}
    </Row>
  </div>
)

SingleCampus.propTypes = {
  students: PropTypes.array.isRequired,
  campuses: PropTypes.array.isRequired,
  currentCampus: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired,
  handleUpdate: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleReassignment: PropTypes.func.isRequired
}

export default SingleCampus
