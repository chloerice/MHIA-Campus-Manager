import { RECEIVE_STUDENT } from './actions/constants'

// in the store, this will be called 'currentStudent'
const currentStudentReducer = (state = {}, action) => {

  switch (action.type) {

    case RECEIVE_STUDENT: return action.currentStudent

    default: return state
  }
}

export default currentStudentReducer
