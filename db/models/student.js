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
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  campusName: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  instanceMethods: {
    getCampusId: function() { // gets the correct campusId value from
                              // the campusName the student was created with,
                              // creating the campus if it doesn't exist already
      const Campus = db.model('campus')
      return Campus.findOrCreate({
        where: {
          name: this.campusName
        }
      })
      .then(campus => campus.id)
    }
  }
})

module.exports = Student
