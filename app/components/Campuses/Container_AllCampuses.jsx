import { connect } from 'redux'

import { createCampusThenRerenderAll } from '../../reducers/actions/CampusActions'
import Campuses from './Campuses'

const mapStateToProps = (/* receives state, ownProps automatically */) => {
  return {
    open: this.state.open,
    isLoading: this.state.isLoading,
    campuses: this.state.campuses
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const onClick = () => {
    return { open: !ownProps.open }
  }

  return {
    toggleForm: () => dispatch(onClick()),
    handleSubmit: (event) => {
      const campus = {
        name: event.target.name,
        image: this.state.image
      }
      event.preventDefault()
      return dispatch(createCampusThenRerenderAll(campus)
    )}
  }
}

const AllCampuses = connect(mapStateToProps, mapDispatchToProps)(Campuses)

export default AllCampuses
