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
    return Campus.find({
      where: { name: pendingStudent.campusName } })
    .then(campus => {
      return pendingStudent.setCampus(campus)
    })
  })
  .then(newStudent => res.status(201).send(newStudent))
  .catch(next)
})

// read student by ID //
router.get('/:id', (req, res, next) => {
  Student.findById(req.params.id, { include: [Campus] })
  .then(student => res.send(student))
  .catch(next)
})

// update student by ID
router.put('/:id', (req, res, next) => {
  Student.findById(req.params.id)
  .then(pendingStudent => pendingStudent.update(req.body))
  .then(student => {
    return Campus.find({
      where: { name: student.campusName }
    })
    .then(campus => {
      return student.setCampus(campus)
    })
    .then(studentToSave => studentToSave.save())
  })
  .then(updatedStudent => {
    // grab student so we can include its campus data
    Student.findById(updatedStudent.id, {
      include: [Campus]
    })
    .then(student => res.send(student))
  })
  .catch(next)
})

// delete student by ID
router.delete('/:id', (req, res, next) => {
  Student.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(deletedStudent => res.sendStatus(204))
  .catch(next)
})

module.exports = router
