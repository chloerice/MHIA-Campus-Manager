import { RECEIVE_CAMPUSES } from './actions/constants'

// in the store, this will be called 'campuses'
const allCampusesReducer = (state = [], action) => {

  switch (action.type) {

    case RECEIVE_CAMPUSES: {
      return action.campuses
    }

    default: return state
  }
}

export default allCampusesReducer
