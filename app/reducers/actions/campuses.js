import { dispatch } from 'react-redux'
import axios from 'axios'
import { UPDATE_CAMPUSES, UPDATE_CAMPUS } from './constants'

// ********* ACTION-CREATORS ********* //
export function renderAllCampuses(campuses) {
  return {
    type: UPDATE_CAMPUSES,
    campuses
  }
}

export function renderSingleCampus(campus) {
  return {
    type: UPDATE_CAMPUS,
    currentCampus: campus
  }
}

// ********* ASYNC ACTION-CREATORS (DISPATCHERS) ********* //

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

function updatingStudent(studentObj) {
  return axios.put(`/api/students/${studentObj.id}`)
}

function deletingCampus(campusObj) {
  return axios.delete(`/api/campuses/${campusObj.id}`)
}

// Dispatchers
export function createCampusThenRerenderAll(campus) {
  axios.all([creatingCampus(campus), readingCampuses()])
  .spread((newCampus, campuses) => dispatch(renderAllCampuses(campuses)))
  .catch(console.error)
}

export function readCampusesThenRerenderAll() {
  readingCampuses()
  .then(campuses => dispatch(renderAllCampuses(campuses)))
  .catch(console.error)
}

export function updateCampusThenRerenderIt(campus) {
  updatingCampus(campus)
  .then(updatedCampus => dispatch(renderSingleCampus(updatedCampus)))
  .catch(console.error)
}

export function updateStudentCampusThenRerenderIt(student, campus) {
  axios.all([updatingStudent(student), readingCampus(campus)])
  .spread((updatedStudent, campusToRender) => dispatch(renderSingleCampus(campusToRender)))
  .catch(console.error)
}

export function deleteCampusThenRerenderAll(campus) {
  axios.all([deletingCampus(campus), readingCampuses()])
  .spread((deletedCampus, campuses) => dispatch(renderAllCampuses(campuses)))
  .catch(console.error)
}
