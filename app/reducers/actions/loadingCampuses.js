import axios from 'axios'

import { REQUEST_CAMPUSES,
         CREATE_CAMPUS,
         REQUEST_CAMPUS,
         UPDATE_CAMPUS,
         DELETE_CAMPUS } from './constants'

// ********* ACTION-CREATORS ********* //

//_____________AllCampuses_____________
export function requestCampuses() {
  return {
    type: REQUEST_CAMPUSES,
    loading: true
  }
}
export function createCampus() {
  return {
    type: CREATE_CAMPUS,
    loading: true
  }
}
//___________SingleCampus_____________
export function requestCampus() {
  return {
    type: REQUEST_CAMPUS,
    loading: true
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

// CRUD Promise-returning Helper Functions for async action-creators
export function readingCampuses() {
  return axios.get('/api/campuses')
}
export function readingCampus(campusObj) {
  return axios.get(`/api/campuses/${campusObj.id}`)
}
export function creatingCampus(campusObj) {
  return axios.post('/api/campuses', campusObj)
}
export function updatingCampus(campusObj) {
  return axios.put(`/api/campuses/${campusObj.id}`)
}
export function deletingCampus(campusObj) {
  return axios.delete(`/api/campuses/${campusObj.id}`)
}
