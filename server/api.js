'use strict'

const db = require('APP/server/db')
const api = module.exports = require('express').Router()

api
  .get('/heartbeat', (req, res) => res.send({ok: true}))
  .use('/auth', require('./routes/auth'))
  .use('/users', require('./routes/users'))
  .use('/students', require('./routes/student-router'))
  .use('/campuses', require('./routes/campus-router'))

// No routes matched? 404.
api.use((req, res) => res.status(404).end())
