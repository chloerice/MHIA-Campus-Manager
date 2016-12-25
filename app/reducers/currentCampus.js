import { UPDATE_CAMPUS } from './actions/constants'

// in the store, this will be called 'currentCampus'
const singleCampusReducer = (state = {}, action) => {
  let nextState

  switch (action.type) {

    case UPDATE_CAMPUS: {
      nextState = {
        currentCampus: action.campus
      }
      break
    }
    // can only remove campus in single campus view, b/c all students must be
    // reassigned prior to deletion
    default: return state
  }
  return nextState
}

export default singleCampusReducer
