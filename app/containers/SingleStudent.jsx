import { connect } from 'react-redux'

import Student from '../components/students/SingleStudent'

const mapStateToProps = (state) => {
  return {
    currentStudent: state.currentStudent,
    campuses: state.campuses,
    loading: state.loading
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatch,
    handleClick: ownProps.handleClick
  }
}

const SingleStudent = connect(mapStateToProps, mapDispatchToProps)(Student)

export default SingleStudent
