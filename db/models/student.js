'use strict';
var Sequelize = require('sequelize')
var db = require('../')


module.exports = db.define('student', {
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
  campus: {
    type: Sequelize.STRING,
    allowNull: false
  }
})
