import { dispatch } from 'react-redux'
import { post } from 'axios'
import { ADD_CAMPUS } from './constants'

// ********* ACTION-CREATOR ********* //
export function renderCreatedCampus(campus) {
  return {
    type: ADD_CAMPUS,
    campus
  }
}

// ********* ASYNC ACTION-CREATOR (DISPATCHER) ********* //
export function sendCreatedCampus(campus) {
  post('/campuses', campus)
  .then(newCampus => dispatch(renderCreatedCampus(newCampus)))
  .catch(console.error)
}

// ********* REDUCER ********* //
let nextState = {}, initialState = {} // in the rootReducer, this will be called 'campuses'

export const allCampusReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CAMPUS: {
      nextState = Object.assign({ campus: action.campus }, state)
      break
    }
    // can only remove campus in single campus view, b/c all students must be
    // reassigned prior to deletion
    default: return state
  }
  return nextState
}
