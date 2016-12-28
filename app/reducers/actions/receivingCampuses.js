import axios from 'axios'
import { RECEIVE_CAMPUSES, RECEIVE_CAMPUS } from './constants'

import { updateStudent, readingStudents, updatingStudent } from './loadingStudents'
import { receiveStudents } from './receivingStudents'
import { requestCampuses,
         createCampus,
         updateCampus,
         deleteCampus,
         readingCampuses,
         readingCampus,
         creatingCampus,
         updatingCampus,
         deletingCampus } from './loadingCampuses'

// ********* ACTION-CREATORS ********* //

//_____________AllCampuses_____________
export function receiveCampuses(campuses) {
  return {
    type: RECEIVE_CAMPUSES,
    loading: false,
    campuses
  }
}
//_____________SingleCampus_____________
export function receiveCampus(campus) {
  return {
    type: RECEIVE_CAMPUS,
    loading: false,
    currentCampus: campus
  }
}

// ********* ASYNC ACTION-CREATORS (THUNKS) ********* //

export function createCampusThenRerenderAll(campus) {
  return dispatch => {
    dispatch(createCampus())

    return Promise.all([creatingCampus(campus), readingCampuses()])
      .then(([newCampus, campuses]) => dispatch(receiveCampuses(campuses)))
      .catch(console.error)
  }
}

export function readCampusesThenRenderAll() {
  return dispatch => {
    dispatch(requestCampuses())

    return readingCampuses()
      .then(campuses => dispatch(receiveCampuses(campuses)))
      .catch(console.error)
  }
}

export function updateCampusThenRerenderIt(campus) {
  return dispatch => {
    dispatch(updateCampus())

    return updatingCampus(campus)
      .then(updatedCampus => dispatch(receiveCampus(updatedCampus)))
      .catch(console.error)
  }
}

export function updateStudentCampusThenRerenderIt(student, campus) {
  return dispatch => {
    dispatch(updateStudent())

  return Promise.all([updatingStudent(student), readingCampus(campus), readingStudents()])
    .then(([updatedStudent, campusToRender, updatedStudents]) =>  {
      dispatch(receiveStudents(updatedStudents))
      dispatch(receiveCampus(campusToRender))
    })
    .catch(console.error)
  }
}

export function deleteCampusThenRerenderAll(campus) {
  return dispatch => {
    dispatch(deleteCampus())

    return Promise.all([deletingCampus(campus), readingCampuses()])
      .then(([deletedCampus, campuses]) => dispatch(receiveCampuses(campuses)))
      .catch(console.error)
  }
}
