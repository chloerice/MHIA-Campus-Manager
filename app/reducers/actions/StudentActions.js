import { dispatch } from 'react-redux'
import axios from 'axios'
import { UPDATE_STUDENTS, UPDATE_STUDENT } from '../constants'

// ********* ACTION-CREATORS ********* //
export function renderAllStudents(students) {
  return {
    type: UPDATE_STUDENTS,
    students
  }
}

export function renderSingleStudent(student) {
  return {
    type: UPDATE_STUDENT,
    currentStudent: student
  }
}

// ********* ASYNC ACTION-CREATORS (DISPATCHERS) ********* //

// CRUD Promise-returning Helper Functions
function creatingStudent(studentObj) {
  return axios.post('api/students', studentObj)
}

function readingStudents() {
  return axios.get('api/students')
}

function updatingStudent(studentObj) {
  return axios.put(`api/students/${studentObj.id}`)
}

function deletingStudent(studentObj) {
  return axios.delete(`api/students/${studentObj.id}`)
}

// Dispatchers
export function createStudentThenRerenderAll(student) {
  axios.all([creatingStudent(student), readingStudents()])
  .spread((newStudent, students) => dispatch(renderAllStudents(students)))
  .catch(console.error)
}

export function updateStudentThenRerenderIt(student) {
  updatingStudent(student)
  .then(updatedStudent => dispatch(renderSingleStudent(updatedStudent)))
  .catch(console.error)
}

export function deleteStudentThenRerenderAll(student) {
  axios.all([deletingStudent(student), readingStudents()])
  .spread((deletedStudent, students) => dispatch(renderAllStudents(students)))
  .catch(console.error)
}
