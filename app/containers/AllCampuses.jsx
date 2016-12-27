import { connect } from 'react-redux'

import { receiveCampus } from '../reducers/actions/campuses'
import { receiveStudent } from '../reducers/actions/students'

import AllCampuses from '../components/campuses/AllCampuses'

const mapStateToProps = (state) => {
  return {
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

export default connect(mapStateToProps, mapDispatchToProps)(AllCampuses)
