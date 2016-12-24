import { connect } from 'redux'

//import dispatchers needed from the SingleStudent_Reducer
import Student from './Student'
import EditStudentInfo from './Form_EditStudentInfo'

const mapStateToProps = (/* receives state, ownProps automatically */) => {
  return {
    //key value pairs of prop values needed
  }
}

const mapDispatchToProps = (/* receives dispatch, ownProps automatically */) => {
  return {
    //key value pairs of dispatchers needed
  }
}

const SingleStudent = connect(mapStateToProps, mapDispatchToProps)(Student, EditStudentInfo)

export default SingleStudent
