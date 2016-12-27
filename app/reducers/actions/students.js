import axios from 'axios'
import { REQUEST_STUDENTS,
         RECEIVE_STUDENTS,
         CREATE_STUDENT,
         REQUEST_STUDENT,
         RECEIVE_STUDENT,
         UPDATE_STUDENT,
         DELETE_STUDENT } from './constants'

// ********* ACTION-CREATORS ********* //

//AllStudents__________________________________
export function requestStudents() {
  return {
    type: REQUEST_STUDENTS,
    loading: true
  }
}

export function receiveStudents(students) {
  return {
    type: RECEIVE_STUDENTS,
    loading: false,
    students
  }
}

//SingleStudent__________________________________
export function createStudent() {
  return {
    type: CREATE_STUDENT,
    loading: true
  }
}

export function requestStudent() {
  return {
    type: REQUEST_STUDENT,
    loading: true
  }
}

export function receiveStudent(student) {
  return {
    type: RECEIVE_STUDENT,
    loading: false,
    currentStudent: student
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

// ********* ASYNC ACTION-CREATORS ********* //

// CRUD Promise-returning Helper Functions
function creatingStudent(studentObj) {
  return axios.post('/api/students', studentObj)
}

function readingStudents() {
  return axios.get('/api/students')
}

function updatingStudent(studentObj) {
  return axios.put(`/api/students/${studentObj.id}`)
}

function deletingStudent(studentObj) {
  return axios.delete(`/api/students/${studentObj.id}`)
}

//THUNKS
export function createStudentThenRerenderAll(student) {
  return dispatch => {
    dispatch(createStudent())

    return axios.all([creatingStudent(student), readingStudents()])
      .then(res => res.data)
      .spread((newStudent, students) => dispatch(receiveStudents(students)))
      .catch(console.error)
  }
}

export function readStudentsThenRenderAll() {
  return dispatch => {
    dispatch(requestStudents())

    return readingStudents()
      .then(students => dispatch(receiveStudents(students)))
      .catch(console.error)
  }
}

export function updateStudentThenRerenderIt(student) {
  return dispatch => {
    dispatch(updateStudent())

    return updatingStudent(student)
      .then(updatedStudent => dispatch(receiveStudent(updatedStudent)))
      .catch(console.error)
  }
}

export function deleteStudentThenRerenderAll(student) {
  return dispatch => {
    dispatch(deleteStudent())

    return axios.all([deletingStudent(student), readingStudents()])
      .then(res => res.data)
      .spread((deletedStudent, students) => dispatch(receiveStudents(students)))
      .catch(console.error)
  }
}
