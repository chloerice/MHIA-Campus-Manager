import axios from 'axios'
import { REQUEST_CAMPUSES,
         RECEIVE_CAMPUSES,
         CREATE_CAMPUS,
         REQUEST_CAMPUS,
         RECEIVE_CAMPUS,
         RECEIVE_UPDATED_STUDENTS_AND_CAMPUS,
         UPDATE_CAMPUS,
         DELETE_CAMPUS } from './constants'

import { updateStudent, readingStudents, updatingStudent } from './students'

// ********* ACTION-CREATORS ********* //

//AllCampuses__________________________________
export function requestCampuses() {
  return {
    type: REQUEST_CAMPUSES,
    loading: true
  }
}

export function receiveCampuses(campuses) {
  return {
    type: RECEIVE_CAMPUSES,
    loading: false,
    campuses
  }
}

//SingleCampus__________________________________
export function createCampus() {
  return {
    type: CREATE_CAMPUS,
    loading: true
  }
}

export function requestCampus() {
  return {
    type: REQUEST_CAMPUS,
    loading: true
  }
}

export function receiveCampus(campus) {
  return {
    type: RECEIVE_CAMPUS,
    loading: false,
    currentCampus: campus
  }
}

export function receiveUpdatedStudentsAndCampus() {
  return {
    type: RECEIVE_UPDATED_STUDENTS_AND_CAMPUS,
    loading: false
  }
}

export function updateCampus() {
  return {
    type: UPDATE_CAMPUS,
    loading: true
  }
}

export function deleteCampus() {
  return {
    type: DELETE_CAMPUS,
    loading: true
  }
}

// ********* ASYNC ACTION-CREATORS ********* //

// CRUD Promise-returning Helper Functions
function creatingCampus(campusObj) {
  return axios.post('/api/campuses', campusObj)
}

function readingCampuses() {
  return axios.get('/api/campuses')
}

function readingCampus(campusObj) {
  return axios.get(`/api/campuses/${campusObj.id}`)
}

function updatingCampus(campusObj) {
  return axios.put(`/api/campuses/${campusObj.id}`)
}

function deletingCampus(campusObj) {
  return axios.delete(`/api/campuses/${campusObj.id}`)
}

//THUNKS
export function createCampusThenRerenderAll(campus) {
  return dispatch => {
    dispatch(createCampus())

    return axios.all([creatingCampus(campus), readingCampuses()])
      .then(res => res.data)
      .spread((newCampus, campuses) => dispatch(receiveCampuses(campuses)))
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

  return axios.all([updatingStudent(student), readingCampus(campus), readingStudents()])
    .then(res => res.data)
    .spread((updatedStudent, campusToRender, updatedStudents) =>  {
      return dispatch(receiveUpdatedStudentsAndCampus(campusToRender, updatedStudents))
    })
    .catch(console.error)
  }
}

export function deleteCampusThenRerenderAll(campus) {
  return dispatch => {
    dispatch(deleteCampus())

    return axios.all([deletingCampus(campus), readingCampuses()])
      .then(res => res.data)
      .spread((deletedCampus, campuses) => dispatch(receiveCampuses(campuses)))
      .catch(console.error)
  }
}
