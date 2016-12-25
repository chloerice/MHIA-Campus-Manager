import { combineReducers } from 'redux'

import campuses from './campuses'
import currentCampus from './currentCampus'
import students from './students'
import currentStudent from './currentStudent'

const rootReducer = combineReducers({
  campuses,
  currentCampus,
  students,
  currentStudent
})

export default rootReducer
