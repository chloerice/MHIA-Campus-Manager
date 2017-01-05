import React, { Component, PropTypes } from 'react'
import { Jumbotron, Grid, Row, Col, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

import { readStudentThenRenderIt,
         deleteStudentThenRerenderAll } from '../../reducers/actions/receivingStudents'

import EditStudentInfo from './Form_EditStudentInfo'
import Student from './Student'

class SingleStudent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      deleting: false
    }

    this.handleDelete = this.handleDelete.bind(this)
  }

  componentDidMount() {
    this.props.dispatch(readStudentThenRenderIt(this.props.params.id))
  }

  handleDelete(event) {
    event.preventDefault()
    this.setState({deleting: true})
    this.props.dispatch(deleteStudentThenRerenderAll(this.props.currentStudent.id))
  }

  render() {
    const loading = this.props.loading
    const deleting = this.state.deleting
    return (
      <Jumbotron>
        <Grid>
          <Row>
            <Student
              className="single-student-header"
              student={this.props.currentStudent}
              handleClick={this.props.handleClick} />
            <Col xs={12} sm={12} md={4} lg={4}>
              <div className="edit-student-form">
                <EditStudentInfo
                  campuses={this.props.campuses}
                  currentStudent={this.props.currentStudent}
                  dispatch={this.props.dispatch}
                  loading={deleting ? false : this.props.loading} />
                <LinkContainer
                  to={{pathname: '/students'}}
                  onClick={this.handleDelete}>
                  <Button
                    bsStyle="danger">
                    { loading ?
                      `Deleting student ${this.props.currentStudent.name}...` : 'Delete Student'}
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

SingleStudent.propTypes = {
  currentStudent: PropTypes.object.isRequired,
  campuses: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  params: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired
}

export default SingleStudent
