'use strict'

const api = require('express').Router()

api.use('/students', require('./routes/student-router'))
api.use('/campuses', require('./routes/campus-router'))

module.exports = api
