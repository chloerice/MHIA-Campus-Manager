import { connect } from 'react-redux'

import { createCampusThenRerenderAll } from '../../reducers/actions/campuses'
import Campuses from './Campuses'

const mapStateToProps = (state) => {
  return {
    campuses: state.campuses
  }
}

const mapDispatchToProps = (dispatch) => {

  return {
    handleSubmit: (event) => {
      event.preventDefault()
      const campus = {
        name: this.state.name,
        image: this.state.image
      }

      return dispatch(createCampusThenRerenderAll(campus)
    )}
  }
}

const AllCampuses = connect(mapStateToProps, mapDispatchToProps)(Campuses)

export default AllCampuses
