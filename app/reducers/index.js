import { combineReducers } from 'redux'

import campuses from './AllCampuses_Reducer'
import currentCampus from './SingleCampus_Reducer'
import students from './AllStudents_Reducer'
import currentStudent from './SingleStudent_Reducer'

const rootReducer = combineReducers({
  campuses, currentCampus, students, currentStudent
})

export default rootReducer
