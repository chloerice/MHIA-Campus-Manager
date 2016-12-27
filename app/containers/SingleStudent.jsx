import { connect } from 'react-redux'

import {
  receiveStudent,
  updateStudentThenRerenderIt,
  deleteStudentThenRerenderAll } from '../reducers/actions/students'

import Student from '../components/students/SingleStudent'

const mapStateToProps = (state) => {
  return {
    currentStudent: state.currentStudent
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const student = ownProps.currentStudent
  return {
    handleClick: (object, objectType) => {
      if (objectType === 'campus') return dispatch(receiveStudent(object))
      else return dispatch(receiveStudent(object))
    },
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
