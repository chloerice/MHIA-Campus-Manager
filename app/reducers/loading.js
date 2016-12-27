import { REQUEST_CAMPUSES,
         CREATE_CAMPUS,
         REQUEST_STUDENTS,
         CREATE_STUDENT,
         REQUEST_STUDENT,
         UPDATE_STUDENT,
         DELETE_STUDENT,
         REQUEST_CAMPUS,
         UPDATE_CAMPUS,
         DELETE_CAMPUS } from './actions/constants'

// in the store, this will be called 'loading'
const loadingReducer = (state = false, action) => {

  switch (action.type) {
    case REQUEST_CAMPUSES: {
      return true
    }
    case CREATE_CAMPUS: {
      return true
    }
    case REQUEST_STUDENTS: {
      return true
    }
    case CREATE_STUDENT: {
      return true
    }
    case REQUEST_STUDENT: {
      return true
    }
    case UPDATE_STUDENT: {
      return true
    }
    case DELETE_STUDENT: {
      return true
    }
    case REQUEST_CAMPUS: {
      return true
    }
    case UPDATE_CAMPUS: {
      return true
    }
    case DELETE_CAMPUS: {
      return true
    }

    default: return state
  }
}

export default loadingReducer
