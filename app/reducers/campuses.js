import { UPDATE_CAMPUSES } from './actions/constants'

// in the store, this will be called 'campuses'
const allCampusesReducer = (state = [], action) => {
  let nextState

  switch (action.type) {

    case UPDATE_CAMPUSES: {
      nextState = state.concat(action.campuses)
      break
    }
    // can only remove campus in single campus view, b/c all students must be
    // reassigned prior to deletion
    default: return state
  }
  return nextState
}

export default allCampusesReducer
