import { combineReducers } from 'redux'

import campuses from './campuses'
import currentCampus from './currentCampus'
import students from './students'
import currentStudent from './currentStudent'
import loading from './loading'

const rootReducer = combineReducers({
  campuses,
  currentCampus,
  students,
  currentStudent,
  loading
})

export default rootReducer
