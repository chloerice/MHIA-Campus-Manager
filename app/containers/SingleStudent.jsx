import { connect } from 'react-redux'

import {
  receiveStudent,
  updateStudentThenRerenderIt,
  deleteStudentThenRerenderAll } from '../reducers/actions/receivingStudents'

import Student from '../components/students/SingleStudent'

const mapStateToProps = (state) => {
  return {
    currentStudent: state.currentStudent,
    campuses: state.campuses
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const student = ownProps.currentStudent
  return {
    handleUpdate: () => {
      dispatch(updateStudentThenRerenderIt(student))
    },
    handleDelete: () => {
      dispatch(deleteStudentThenRerenderAll(student))
    }
  }
}

const SingleStudent = connect(mapStateToProps, mapDispatchToProps)(Student)

export default SingleStudent
