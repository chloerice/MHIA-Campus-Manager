import { UPDATE_STUDENTS } from './actions/constants'

// in the store, this will be called 'students'
export const allStudentsReducer = (state = [], action) => {
  let nextState

  switch (action.type) {

    case UPDATE_STUDENTS: {
      nextState = state.concat(action.students)
      break
    }

    default: return state
  }
  return nextState
}
