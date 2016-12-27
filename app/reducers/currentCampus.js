import { RECEIVE_CAMPUS } from './actions/constants'

// in the store, this will be called 'currentCampus'
const singleCampusReducer = (state = {}, action) => {

  switch (action.type) {

    case RECEIVE_CAMPUS: {
      return Object.assign({}, state, action.campus)
    }

    default: return state
  }
}

export default singleCampusReducer
