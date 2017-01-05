import { RECEIVE_STUDENTS,
         RECEIVE_UPDATED_STUDENTS_AND_CAMPUS } from './actions/constants'

// in the store, this will be called 'students'
const allStudentsReducer = (state = [], action) => {

  switch (action.type) {

    case RECEIVE_STUDENTS: {
      return action.students
    }

    case RECEIVE_UPDATED_STUDENTS_AND_CAMPUS: {
      return action.students
    }

    default: return state
  }
}

export default allStudentsReducer
