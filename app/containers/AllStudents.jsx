import { connect } from 'react-redux'

import { receiveCampus } from '../reducers/actions/campuses'
import { receiveStudent } from '../reducers/actions/students'

import AllStudents from '../components/students/AllStudents'

const mapStateToProps = (state) => {
  return {
    students: state.students,
    campuses: state.campuses,
    loading: state.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleClick: (object, objectType) => {
      if (objectType === 'campus') return dispatch(receiveCampus(object))
      else return dispatch(receiveStudent(object))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllStudents)
