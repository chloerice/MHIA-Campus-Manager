import { RECEIVE_CAMPUS, RECEIVE_STUDENT } from './actions/constants'

// in the store, this will be called 'currentCampus'
const currentCampusReducer = (state = {}, action) => {

  switch (action.type) {

    case RECEIVE_CAMPUS: return action.currentCampus

    case RECEIVE_STUDENT: return action.currentCampus

    default: return state
  }
}

export default currentCampusReducer
