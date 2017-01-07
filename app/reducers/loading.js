import { REQUEST_CAMPUSES,
         RECEIVE_CAMPUSES,
         CREATE_CAMPUS,
         REQUEST_STUDENTS,
         RECEIVE_STUDENTS,
         CREATE_STUDENT,
         REQUEST_STUDENT,
         RECEIVE_STUDENT,
         UPDATE_STUDENT,
         UPDATE_STUDENTS,
         DELETE_STUDENT,
         REQUEST_CAMPUS,
         RECEIVE_CAMPUS,
         UPDATE_CAMPUS,
         DELETE_CAMPUS } from './actions/constants'

// in the store, this will be called 'loading'
const loadingReducer = (state = false, action) => {

  switch (action.type) {
    case CREATE_CAMPUS: return action.loading

    case CREATE_STUDENT: return action.loading

    case DELETE_CAMPUS: return action.loading

    case DELETE_STUDENT: return action.loading

    case RECEIVE_CAMPUSES: return action.loading

    case RECEIVE_CAMPUS: return action.loading

    case RECEIVE_STUDENTS: return action.loading

    case RECEIVE_STUDENT: return action.loading

    case REQUEST_CAMPUSES: return action.loading

    case REQUEST_CAMPUS: return action.loading

    case REQUEST_STUDENTS: return action.loading

    case REQUEST_STUDENT: return action.loading

    case UPDATE_CAMPUS: return action.loading

    case UPDATE_STUDENT: return action.loading

    case UPDATE_STUDENTS: return action.loading

    default: return state
  }
}

export default loadingReducer
