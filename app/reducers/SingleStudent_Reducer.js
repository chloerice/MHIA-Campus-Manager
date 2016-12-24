import { UPDATE_STUDENT } from './actions/constants'

// in the rootReducer, this will be called 'currentStudent'
export const singleStudentReducer = (state = {}, action) => {
  let nextState

  switch (action.type) {

    case UPDATE_STUDENT: {
      nextState = action.student
      break
    }
    // can only remove student in single student view, b/c all students must be
    // reassigned prior to deletion
    default: return state
  }
  return nextState
}
