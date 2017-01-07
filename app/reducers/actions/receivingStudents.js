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

    return creatingStudent(student)
      .then(newStudent => {
        dispatch(requestStudents())
        return readingStudents()
      })
      .then(students => dispatch(receiveStudents(students)))
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

export function updateStudentThenRerenderIt(id, info) {
  return dispatch => {
    dispatch(updateStudent())

    return updatingStudent(id, info)
      .then(updatedStudent => {
        // Since GET students/:id has an include: [Campus], we request the student even though we already have it after updating so that currentStudent keeps its campus info
        dispatch(requestStudent())
        return readingStudent(updatedStudent.id)
      })
      .then(student => {
        dispatch(receiveStudent(student))
        // now grab the whole student list so our students prop is up to date
        dispatch(requestStudents())
        return readingStudents()
      })
      .then(students => dispatch(receiveStudents(students)))
      .catch(console.error)
  }
}

export function deleteStudentThenRerenderAll(id) {
  return dispatch => {
    dispatch(deleteStudent())

    return deletingStudent(id)
      .then(() => {
        dispatch(requestStudents())
        return readingStudents()
      })
      .then(students => dispatch(receiveStudents(students)))
      .catch(console.error)
  }
}
