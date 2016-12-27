import { RECEIVE_STUDENTS } from './actions/constants'

// in the store, this will be called 'students'
const allStudentsReducer = (state = [], action) => {

  switch (action.type) {

    case RECEIVE_STUDENTS: {
      return state.concat(action.students)
    }

    default: return state
  }
}

export default allStudentsReducer
