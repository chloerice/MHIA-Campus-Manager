'use strict';

// Require all the models
	// Running each model (i.e. table) module (i.e. file) registers each model into Sequelize so any other part of the application could call Sequelize.model('student') OR Sequelize.models.student to get access to the `student` model.
	// This works if we all use the same Sequelize instance (instantiated in and exported from `/db/index.js`)

const Student = require('./student')
const Campus = require('./campus')

Student.belongsTo(Campus)

module.exports = {Student, Campus}
