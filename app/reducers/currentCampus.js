import { RECEIVE_CAMPUS } from './actions/constants'

// in the store, this will be called 'currentCampus'
const currentCampusReducer = (state = {}, action) => {

  switch (action.type) {

    case RECEIVE_CAMPUS: return action.currentCampus

    default: return state
  }
}

export default currentCampusReducer
