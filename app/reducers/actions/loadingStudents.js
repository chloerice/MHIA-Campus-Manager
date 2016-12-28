import axios from 'axios'

import { REQUEST_STUDENTS,
         CREATE_STUDENT,
         REQUEST_STUDENT,
         UPDATE_STUDENT,
         DELETE_STUDENT } from './constants'

// ********* ACTION-CREATORS ********* //

//_____________AllStudents_____________
export function requestStudents() {
 return {
   type: REQUEST_STUDENTS,
   loading: true
 }
}
export function createStudent() {
 return {
   type: CREATE_STUDENT,
   loading: true
 }
}
//___________SingleStudent_____________
export function requestStudent() {
 return {
   type: REQUEST_STUDENT,
   loading: true
 }
}
export function updateStudent() {
 return {
   type: UPDATE_STUDENT,
   loading: true
 }
}
export function deleteStudent() {
 return {
   type: DELETE_STUDENT,
   loading: true
 }
}

// CRUD Promise-returning Helper Functions for async action-creators
export function readingStudents() {
  return axios.get('/api/students')
    .then(res => res.data)
}
export function creatingStudent(studentObj) {
 return axios.post('/api/students', studentObj)
  .then(res => res.data)
}
export function updatingStudent(studentObj) {
 return axios.put(`/api/students/${studentObj.id}`)
  .then(res => res.data)
}
export function deletingStudent(studentObj) {
 return axios.delete(`/api/students/${studentObj.id}`)
  .then(res => res.data)
}
