'use strict';

const Sequelize = require('sequelize')
const db = require('../index')

const Campus = db.define('campus', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  image: Sequelize.STRING
})

module.exports = Campus
