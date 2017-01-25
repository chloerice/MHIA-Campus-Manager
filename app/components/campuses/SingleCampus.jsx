import React, { Component, PropTypes } from 'react'
import { Jumbotron, Grid, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router'

import CampusJumbotron from './CampusJumbotron'
import StudentTable from '../utilities/StudentTable'
import DeleteButton from '../utilities/DeleteButton'
import EditCampusInfo from './Form_EditCampusInfo'

class SingleCampus extends Component {
  constructor(props) {
    super(props)

    this.state = {
      deleting: false,
    }
    this.campusRoster = this.campusRoster.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  componentDidMount() {
    this.props.grabCurrentCampus(this.props.params.id)
  }

  campusRoster() {
    return this.props.students.filter(student => student.campusId === this.props.currentCampus.id)
  }

  handleDelete(event) {
    // b/c the button is linked, event in this case is to navigate to the AllCampuses page, so we don't want to prevent that default action unless there's a warning preventing the deletion!
    if (this.campusRoster().length === 0) {
      const id = this.props.currentCampus.id
      this.setState({ deleting: true })
      this.props.deleteCampus(id)
    } else {
      event.preventDefault()
      alert(`Cannot delete campus ${this.props.currentCampus.name} before reassigning its students to another campus!`)
    }
  }

  render() {
    const deleting = this.state.deleting

    return (
      <Jumbotron>
        <Grid>
          <CampusJumbotron campus={this.props.currentCampus} />
          <Row>
            <Col className="campus-roster" xs={12} sm={12} md={7} lg={7}>
              <StudentTable
                students={this.campusRoster()}
                campuses={this.props.campuses}
                showCampusName={false}
                handleClick={this.props.handleClick} />
            </Col>
            <Col xs={12} sm={12} md={5} lg={5}>
              <div className="edit-campus-form">
                <EditCampusInfo
                  campuses={this.props.campuses}
                  currentCampus={this.props.currentCampus}
                  updateCampus={this.props.updateCampus}
                  loading={deleting ? false : this.props.loading} />
                <Link
                  to="/campuses"
                  onClick={this.handleDelete}>
                  <DeleteButton
                    loading={ !deleting ? false : this.props.loading }
                    objType="Campus"
                    name={this.props.currentCampus.name || ''}/>
                </Link>
              </div>
            </Col>
          </Row>
        </Grid>
      </Jumbotron>
    )
  }
}

SingleCampus.propTypes = {
  currentCampus: PropTypes.object.isRequired,
  students: PropTypes.array.isRequired,
  campuses: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  params: PropTypes.object.isRequired,
  grabCurrentCampus: PropTypes.func.isRequired,
  updateCampus: PropTypes.func.isRequired,
  deleteCampus: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired
}

export default SingleCampus
