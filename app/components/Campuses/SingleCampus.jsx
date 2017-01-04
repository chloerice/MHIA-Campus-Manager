import React, { Component, PropTypes } from 'react'
import { Jumbotron, Grid, Row, Col } from 'react-bootstrap'

import CampusJumbotron from './CampusJumbotron'
import StudentTable from '../utilities/StudentTable'
// import EditCampusInfo from './Form_EditCampusInfo'
// import ReassignStudent from './Form_ReassignStudent'
import { readCampusThenRenderIt } from '../../reducers/actions/receivingCampuses'

class SingleCampus extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.dispatch(readCampusThenRenderIt(this.props.params.id))
  }

  render() {
    return (
      <Jumbotron>
        <Grid>
          <CampusJumbotron campus={this.props.currentCampus} />
          <Row>
            <Col className="campus-roster" xs={12} sm={12} md={7} lg={7}>
              <StudentTable
                students={this.props.students.filter(student => student.campusId === this.props.currentCampus.id)}
                campuses={this.props.campuses}
                showCampusName={false}
                handleClick={this.props.handleClick} />
            </Col>
            <Col xs={12} sm={12} md={5} lg={5}>
            </Col>
            {/* <EditCampusInfo
              handleDelete={props.handleDelete}
              handleUpdate={props.handleUpdate}/>
            <ReassignStudent handleReassign={props.handleReassignment} /> */}
          </Row>
        </Grid>
      </Jumbotron>
    )
  }
}

SingleCampus.propTypes = {
  students: PropTypes.array.isRequired,
  campuses: PropTypes.array.isRequired,
  currentCampus: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  handleUpdate: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleReassignment: PropTypes.func.isRequired
}

export default SingleCampus
