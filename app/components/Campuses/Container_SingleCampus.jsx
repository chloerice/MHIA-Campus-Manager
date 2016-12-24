import { connect } from 'redux'

import {
  updateCampusThenRerenderIt,
  deleteCampusThenRerenderAll,
  updateStudentCampusThenRerenderIt } from '../../reducers/actions/CampusActions'
import SingleCampus from './SingleCampus'

const mapStateToProps = (/* receives state, ownProps automatically */) => {
  return {
    students: this.state.students,
    currentCampus: this.state.currentCampus
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
    handleReassign: () => {
      dispatch(updateStudentCampusThenRerenderIt(student, campus))
    }
  }
}

const SingleCampusContainer = connect(mapStateToProps, mapDispatchToProps)(SingleCampus)

export default SingleCampusContainer
