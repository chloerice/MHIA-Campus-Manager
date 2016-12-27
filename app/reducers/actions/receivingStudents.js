import axios from 'axios'
import { RECEIVE_STUDENTS, RECEIVE_STUDENT } from './constants'

import { requestStudents,
         createStudent,
         updateStudent,
         deleteStudent,
         readingStudents,
         creatingStudent,
         updatingStudent,
         deletingStudent } from './loadingStudents'

// ********* ACTION-CREATORS ********* //

//_____________AllStudents_____________
export function receiveStudents(students) {
  return {
    type: RECEIVE_STUDENTS,
    loading: false,
    students
  }
}
//_____________SingleStudent_____________
export function receiveStudent(student) {
  return {
    type: RECEIVE_STUDENT,
    loading: false,
    currentStudent: student
  }
}

// ********* ASYNC ACTION-CREATORS (THUNKS) ********* //

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
