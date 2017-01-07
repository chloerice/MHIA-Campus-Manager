import { connect } from 'react-redux'

import SingleCampus from '../components/campuses/SingleCampus'

const mapStateToProps = (state) => {
  return {
    campuses: state.campuses,
    students: state.students,
    currentCampus: state.currentCampus,
    currentStudent: state.currentStudent
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatch,
    handleClick: ownProps.handleClick
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleCampus)
