import React, { Component, PropTypes } from 'react'
import { Jumbotron, Grid, Row, Col, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

import CampusJumbotron from './CampusJumbotron'
import StudentTable from '../utilities/StudentTable'
import EditCampusInfo from './Form_EditCampusInfo'

import { readCampusThenRenderIt,
         deleteCampusThenRerenderAll } from '../../reducers/actions/receivingCampuses'

class SingleCampus extends Component {
  constructor(props) {
    super(props)

    this.state = {
      deleting: false
    }
  }

  componentDidMount() {
    this.props.dispatch(readCampusThenRenderIt(this.props.params.id))
  }

  handleDelete(event) {
    event.preventDefault()
    this.setState({deleting: true})
    this.props.dispatch(deleteCampusThenRerenderAll(this.props.currentCampus.id))
  }

  render() {
    const loading = this.props.loading
    const deleting = this.state.deleting

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
              <div className="edit-campus-form">
                <EditCampusInfo
                  currentCampus={this.props.currentCampus}
                  dispatch={this.props.dispatch}
                  loading={deleting ? false : this.props.loading} />
                <LinkContainer
                  to={{pathname: '/students'}}
                  onClick={this.handleDelete}>
                  <Button
                    bsStyle="danger">
                    { loading ?
                      `Deleting student ${this.props.currentCampus.name}...` : 'Delete Student'}
                  </Button>
                </LinkContainer>
              </div>
            </Col>
          </Row>
        </Grid>
      </Jumbotron>
    )
  }
}

SingleCampus.propTypes = {
  students: PropTypes.array.isRequired,
  campuses: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  currentCampus: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  handleUpdate: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleReassignment: PropTypes.func.isRequired
}

export default SingleCampus
