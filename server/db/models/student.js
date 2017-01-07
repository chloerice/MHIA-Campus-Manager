'use strict';

const Sequelize = require('sequelize')
const db = require('../index')
const Promise = require('bluebird')

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
      return student.setEmail()
    },
    beforeUpdate: function(student) {
      return student.setEmail()
    }
  },
  instanceMethods: {
    setEmail: function() {
      const name = this.name.toLowerCase()
      const campusName = this.campusName.toLowerCase()

      return Student.findAll({
        where: { name, campusName }
      })
      .then(students => {
        if (students.length < 2 ) { // if name is unique to campus, generate email normally
          this.email = `${name}@${campusName}.mhia.edu`
        } else {
          // otherwise, add an integer after the student's name to generate unique email
          const num = students.length
          this.email = `${name}${num}@${campusName}.mhia.edu`
        }
      })
    }
  }
})

module.exports = Student
