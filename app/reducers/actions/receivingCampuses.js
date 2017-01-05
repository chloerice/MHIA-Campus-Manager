'use strict'

import { RECEIVE_CAMPUSES,
         RECEIVE_CAMPUS,
         RECEIVE_UPDATED_STUDENTS_AND_CAMPUS } from './constants'

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

export function receiveUpdatedStudentsAndCampus(object) {
  return {
    type: RECEIVE_UPDATED_STUDENTS_AND_CAMPUS,
    loading: false,
    currentCampus: object.currentCampus,
    students: object.students
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
      .then(object => dispatch(receiveUpdatedStudentsAndCampus(object)))
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
