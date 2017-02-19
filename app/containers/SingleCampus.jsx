import { connect } from 'react-redux'

import SingleCampus from '../components/campuses/SingleCampus'
import { deleteCampusThenRerenderAll,
         updateCampusThenRerenderIt } from '../reducers/actions/receivingCampuses'

const mapStateToProps = state => {
  return {
    campuses: state.campuses,
    students: state.students,
    currentCampus: state.currentCampus,
    currentStudent: state.currentStudent
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteCampus: id => dispatch(deleteCampusThenRerenderAll(id)),
    updateCampus: (id, info) => dispatch(updateCampusThenRerenderIt(id, info))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleCampus)
