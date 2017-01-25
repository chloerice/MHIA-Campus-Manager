import { connect } from 'react-redux'

import Student from '../components/students/SingleStudent'
import { readStudentThenRenderIt,
         deleteStudentThenRerenderAll,
         updateStudentThenRerenderIt } from '../../reducers/actions/receivingStudents'

const mapStateToProps = (state) => {
  return {
    currentStudent: state.currentStudent,
    campuses: state.campuses,
    loading: state.loading
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    grabCurrentStudent: (id) => dispatch(readStudentThenRenderIt(id)),
    deleteStudent: (id) => dispatch(deleteStudentThenRerenderAll(id)),
    updateStudent: (id, infoToUpdate) => dispatch(updateStudentThenRerenderIt(id, infoToUpdate)),
    handleClick: ownProps.handleClick
  }
}

const SingleStudent = connect(mapStateToProps, mapDispatchToProps)(Student)

export default SingleStudent
