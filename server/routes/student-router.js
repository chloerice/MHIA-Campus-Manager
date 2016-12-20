'use strict'

const router = require('express').Router()
const db = require('../../db')
const Student = db.model('student')

router.get('/', (req, res, next) => {
  Student.findAll()
  .then(studentArr => res.send(studentArr))
  .catch(next)
})

router.post('/', (req, res, next) => {
  Student.create(req.body)
  .then(student => res.status(201).send(student))
  .catch(next)
})

router.get('/:id', (req, res, next) => {
  Student.findById(req.params.id)
  .then(student => res.send(student))
  .catch(next)
})

router.put('/:id', (req, res, next) => {
  Student.findById(req.params.id)
  .then(student => {
    return student.update(req.body)
  })
  .then(updatedStudent => res.send(updatedStudent))
  .catch(next)
})

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
