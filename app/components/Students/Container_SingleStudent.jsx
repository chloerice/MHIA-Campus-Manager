import { connect } from 'react-redux'

//import dispatchers needed from the SingleStudent_Reducer
import Student from './SingleStudent'

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

const SingleStudent = connect(mapStateToProps, mapDispatchToProps)(Student)

export default SingleStudent
