'use strict';

const Sequelize = require('sequelize')
const db = require('../index')
// currently have a bug that disallows creating more than
// one student with the same name and campus, so many changes have been made
// since that was initially working I'm not sure where the validation error
// stems from ... (tried a beforeValidate hook instead of beforeCreate/Update
// but that isn't it...)
const Student = db.define('student', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: false
  },
  email: {
    type: Sequelize.STRING,
  },
  campusName: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: false
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
        where: {
          name: this.name,
          campusName: this.campusName
        }
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
