import React, { Component, PropTypes } from 'react'
import { Jumbotron, Grid, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router'

import { readStudentThenRenderIt,
         deleteStudentThenRerenderAll } from '../../reducers/actions/receivingStudents'

import DeleteButton from '../utilities/DeleteButton'
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
    // b/c the button is linked, event in this case is to navigate to the AllStudents page, so we don't want to prevent that default action!
    const id = this.props.currentStudent.id
    this.setState({ deleting: true })
    this.props.dispatch( deleteStudentThenRerenderAll(id) )
  }

  render() {
    const deleting = this.state.deleting

    return (
      <Jumbotron>
        <Grid>
          <Row>
            <Student
              className="single-student-header"
              student={this.props.currentStudent}
              handleClick={this.props.handleClick} />
            <Col xs={12} sm={12} md={6} lg={6}>
              <div className="edit-student-form">
                <EditStudentInfo
                  campuses={this.props.campuses}
                  currentStudent={this.props.currentStudent}
                  dispatch={this.props.dispatch}
                  loading={ deleting ? false : this.props.loading } />
                <Link to="/students" onClick={this.handleDelete}>
                  <DeleteButton
                    loading={ !deleting ? false : this.props.loading }
                    objType="Student"
                    name={this.props.currentStudent.name || ''}/>
                </Link>
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
  loading: PropTypes.bool.isRequired,
  params: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired
}

export default SingleStudent
