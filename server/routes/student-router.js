'use strict'

const router = require('express').Router()
const db = require('../db')

const Student = db.model('student')
const Campus = db.model('campus')

// read all students
router.get('/', (req, res, next) => {
  Student.findAll()
  .then(studentArr => res.send(studentArr))
  .catch(next)
})

// create new student
router.post('/', (req, res, next) => {
  Student.create({
    name: req.body.name,
    campusName: req.body.campusName,
  })
  .then(pendingStudent => {
    Campus.find({ where: { name: pendingStudent.campusName } })
    .then(campus => pendingStudent.setCampus(campus))
  })
  .then(newStudent => res.status(201).send(newStudent))
  .catch(next)
})

// read student by ID //
router.get('/:id', (req, res, next) => {
  Student.findById(req.params.id)
  .then(student => res.send(student))
  .catch(next)
})

// update student by ID
router.put('/:id', (req, res, next) => {
  Student.findById(req.params.id)
  .then(student => student.update(req.body))
  .then(pendingStudent => {
    Campus.find({ where: { name: pendingStudent.campusName } })
    .then(campus => pendingStudent.setCampus(campus))
  })
  .then(updatedStudent => res.send(updatedStudent))
  .catch(next)
})

// delete student by ID
router.delete('/:id', (req, res, next) => {
  Student.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(deletedStudent => res.status(204).send(deletedStudent))
  .catch(next)
})

module.exports = router
