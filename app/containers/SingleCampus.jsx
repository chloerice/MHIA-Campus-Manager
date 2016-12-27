import { connect } from 'react-redux'

import {
  updateCampusThenRerenderIt,
  deleteCampusThenRerenderAll,
  updateStudentCampusThenRerenderIt } from '../reducers/actions/receivingCampuses'

import SingleCampus from '../components/campuses/SingleCampus'

const mapStateToProps = (state) => {
  return {
    students: state.students,
    currentCampus: state.currentCampus,
    currentStudent: state.currentStudent
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const campus = ownProps.currentCampus
  const student = ownProps.currentStudent
  return {
    handleUpdate: () => {
      dispatch(updateCampusThenRerenderIt(campus))
    },
    handleDelete: () => {
      dispatch(deleteCampusThenRerenderAll(campus))
    },
    handleReassignment: () => {
      dispatch(updateStudentCampusThenRerenderIt(student, campus))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleCampus)
