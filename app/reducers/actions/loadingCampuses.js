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
    .then(res => res.data)
}
export function readingCampus(id) {
  return axios.get(`/api/campuses/${id}`)
    .then(res => res.data)
}
export function creatingCampus(campusObj) {
  return axios.post('/api/campuses', campusObj)
    .then(res => res.data)
}
export function updatingCampus(id, info) {
  return axios.put(`/api/campuses/${id}`, info)
    .then(res => res.data)
}
export function deletingCampus(id) {
  return axios.delete(`/api/campuses/${id}`)
    .then(res => res.data)
}
