import { connect } from 'react-redux'

import SingleCampus from '../components/campuses/SingleCampus'
import { readCampusThenRenderIt,
         deleteCampusThenRerenderAll,
         updateCampusThenRerenderIt } from '../reducers/actions/receivingCampuses'

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
    grabCurrentCampus: (id) => dispatch(readCampusThenRenderIt(id)),
    deleteCampus: (id) => dispatch(deleteCampusThenRerenderAll(id)),
    updateCampus: (id, info) => dispatch(updateCampusThenRerenderIt(id, info)),
    handleClick: ownProps.handleClick
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleCampus)
