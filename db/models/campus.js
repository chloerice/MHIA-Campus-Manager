'use strict';
var Sequelize = require('sequelize')
var db = require('../')


module.exports = db.define('campus', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  image: Sequelize.STRING
})
