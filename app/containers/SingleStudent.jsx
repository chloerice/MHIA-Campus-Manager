import { connect } from 'react-redux'

import Student from '../components/students/SingleStudent'
import { deleteStudentThenRerenderAll,
         updateStudentThenRerenderIt } from '../reducers/actions/receivingStudents'

const mapStateToProps = state => {
  return {
    currentStudent: state.currentStudent,
    campuses: state.campuses,
    loading: state.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteStudent: (id) => dispatch(deleteStudentThenRerenderAll(id)),
    updateStudent: (id, infoToUpdate) => dispatch(updateStudentThenRerenderIt(id, infoToUpdate)),
  }
}

const SingleStudent = connect(mapStateToProps, mapDispatchToProps)(Student)

export default SingleStudent
