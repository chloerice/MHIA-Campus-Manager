import React, { Component, PropTypes } from 'react'
import { Jumbotron, Grid, Row } from 'react-bootstrap'

import { readStudentThenRenderIt } from '../../reducers/actions/receivingStudents'

// import EditStudentInfo from './Form_EditStudentInfo'
import Student from './Student'

class SingleStudent extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.dispatch(readStudentThenRenderIt(this.props.params.id))
  }

  render() {

    return (
      <Jumbotron>
        <Grid>
          <Row>
            <Student
              className="single-student-header"
              student={this.props.currentStudent}
              handleClick={this.props.handleClick} />
            {/* <EditStudentInfo
                 campuses={props.campuses}
            //   handleUpdate={props.handleUpdate}
            //   handleDelete={props.handleDelete} /> */}
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
  params: PropTypes.object.isRequired,
  // handleUpdate: PropTypes.func.isRequired,
  // handleDelete: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired
}

export default SingleStudent
