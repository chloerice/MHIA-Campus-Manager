import { RECEIVE_CAMPUS,
         RECEIVE_UPDATED_STUDENTS_AND_CAMPUS } from './actions/constants'

// in the store, this will be called 'currentCampus'
const currentCampusReducer = (state = {}, action) => {

  switch (action.type) {

    case RECEIVE_CAMPUS: return action.currentCampus

    case RECEIVE_UPDATED_STUDENTS_AND_CAMPUS: return action.currentCampus

    default: return state
  }
}

export default currentCampusReducer
