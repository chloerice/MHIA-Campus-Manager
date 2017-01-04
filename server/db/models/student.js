'use strict';

const Sequelize = require('sequelize')
const db = require('../index')

const Student = db.define('student', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    unique: true
  },
  campusName: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  hooks: {
    beforeCreate: function(student) {
      generateEmail(student)
    },
    beforeUpdate: function(student) {
      generateEmail(student)
    }

  }
})

function generateEmail(student) {
  const name = student.name.toLowerCase()
  const campusName = student.campusName.toLowerCase()

  return Student.findAll({ where: { name, campusName } })
  .then(students => {
    if (!students.length) { // if name is unique to campus, generate email normally
      student.email = `${name}@${campusName}.mhia.edu`
    } else {
      // otherwise, add an integer after the student's name to generate unique email
      const num = students.length + 1
      student.email = `${name}${num}@${campusName}.mhia.edu`
    }
  })
}

module.exports = Student
