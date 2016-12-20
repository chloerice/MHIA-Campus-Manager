'use strict'

const router = require('express').Router()
const db = require('../../db')
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
    email: req.body.email,
    campusName: req.body.campusName,
    campus: {
      name: req.body.campusName
    }
  }, {
    include: [Campus]
  })
  .then(student => res.status(201).send(student))
  .catch(next)
})

// read student by ID
router.get('/:id', (req, res, next) => {
  Student.findById(req.params.id)
  .then(student => res.send(student))
  .catch(next)
})

// update student by ID
router.put('/:id', (req, res, next) => {
  const newCampus = req.body.campusName || false

  Student.findById(req.params.id)
  .then(student => {
    return student.update(req.body)
  })
  .then(updatedStudent => {
    if (newCampus) {
      updatedStudent.email = `${updatedStudent.name.toLowerCase()}@${updatedStudent.campusName.toLowerCase()}.mhia.edu`
      return updatedStudent.save()
        .then(student => {
          return Campus.find({
            where: {
              name: student.campusName
            }
          })
        })
        .then(campus => {
          updatedStudent.setCampus(campus)
        })
    } else {
      return updatedStudent
    }
  })
  .then(fullyUpdatedStudent => res.send(fullyUpdatedStudent))
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
