'use strict'

import { RECEIVE_CAMPUSES,
         RECEIVE_CAMPUS } from './constants'
import { receiveStudents } from './receivingStudents'
import { requestStudents,
         readingStudents,
         updateStudents,
         updatingStudents } from './loadingStudents'
import { requestCampuses,
         createCampus,
         requestCampus,
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

    return creatingCampus(campus)
      .then(newCampus => {
        dispatch(requestCampuses())
        return readingCampuses()
      })
      .then(campuses => dispatch(receiveCampuses(campuses)))
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

export function readCampusThenRenderIt(id) {
  return dispatch => {
    dispatch(requestCampus())

    return readingCampus(id)
      .then(campus => dispatch(receiveCampus(campus)))
      .catch(console.error)
  }
}

export function updateCampusThenRerenderIt(id, info) {
  return dispatch => {
    dispatch(updateCampus())

    return updatingCampus(id, info)
      .then(updatedCampus => {
        dispatch(receiveCampus(updatedCampus))
        dispatch(updateStudents())
        return updatingStudents(updatedCampus)
      })
      .then(updatedStudents => {
        // grab the whole list of students so our students prop is up to date
        dispatch(requestStudents())
        return readingStudents()
      })
      .then(students => {
        dispatch(receiveStudents(students))
        // grab the whole list of campuses so our campuses prop is up to date
        dispatch(requestCampuses())
        return readingCampuses()
      })
      .then(campuses => dispatch(receiveCampuses(campuses)))
      .catch(console.error)
  }
}

export function deleteCampusThenRerenderAll(id) {
  return dispatch => {
    dispatch(deleteCampus())

    return deletingCampus(id)
      .then(() => {
        dispatch(requestCampuses())
        return readingCampuses()
      })
      .then(campuses => dispatch(receiveCampuses(campuses)))
      .catch(console.error)
  }
}
