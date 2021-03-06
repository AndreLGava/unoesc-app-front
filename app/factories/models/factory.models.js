'use strict';

	var mongoose = require('mongoose'),
		Schema = mongoose.Schema;

	var FactorySchema = new Schema({
		name: {
			type: String,
			unique: true,
			required: true
		},
		description:{
			type: String
		},address:{
			type: String
		},phone:{
			type: String
		},kind:{
			type:String
		}
	})

	module.exports = mongoose.model('Factory', FactorySchema);