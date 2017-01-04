'use strict'

import { RECEIVE_STUDENTS, RECEIVE_STUDENT } from './constants'

import { requestStudents,
         createStudent,
         requestStudent,
         updateStudent,
         deleteStudent,
         readingStudents,
         creatingStudent,
         readingStudent,
         updatingStudent,
         deletingStudent } from './loadingStudents'

// ********* ACTION-CREATORS ********* //

//_____________AllStudents_____________
export function receiveStudents(students) {
  return {
    type: RECEIVE_STUDENTS,
    students,
    loading: false,
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

    return Promise.all([creatingStudent(student), readingStudents()])
      .then(([newStudent, students]) => dispatch(receiveStudents(students)))
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

export function readStudentThenRenderIt(id) {
  return dispatch => {
    dispatch(requestStudent())

    return readingStudent(id)
      .then(student => dispatch(receiveStudent(student)))
      .catch(console.error)
  }
}

export function updateStudentThenRerenderIt(student) {
  return dispatch => {
    dispatch(updateStudent())

    return updatingStudent(student)
      .then(updatedStudent => dispatch(receiveStudent(student)))
      .catch(console.error)
  }
}

export function deleteStudentThenRerenderAll(student) {
  return dispatch => {
    dispatch(deleteStudent())

    return Promise.all([deletingStudent(student), readingStudents()])
      .then(([deletedStudent, students]) => dispatch(receiveStudents(students)))
      .catch(console.error)
  }
}
