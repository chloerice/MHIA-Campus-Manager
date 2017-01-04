import { connect } from 'react-redux'

import AllStudents from '../components/students/AllStudents'

const mapStateToProps = (state) => {
  return {
    students: state.students,
    campuses: state.campuses,
    loading: state.loading
  }
}

export default connect(mapStateToProps)(AllStudents)
