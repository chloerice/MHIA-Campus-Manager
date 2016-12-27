import { RECEIVE_STUDENT } from './actions/constants'

// in the store, this will be called 'currentStudent'
const singleStudentReducer = (state = {}, action) => {

  switch (action.type) {

    case RECEIVE_STUDENT: {
      return Object.assign({}, state, action.student)
    }

    default: return state
  }
}

export default singleStudentReducer
