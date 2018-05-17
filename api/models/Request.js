/**
 * Request.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
const uuid = require('uuid');
module.exports = {
	primaryKey: 'id',
	attributes: {

		//  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
		//  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
		//  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
		id: {
			type: 'number',
			unique: true,
			isInteger: true,
			autoIncrement: true,
			min: 0
		},
		track: {
			type:'json',
			required: true
		},
		spotify: {
			type: 'string',
			required: true,
			unique: true
		},
		status: {
			type: 'string',
			isIn: ['requested', 'queued', 'played', 'declined'],
			defaultsTo: 'requested'
		},
		requester: {
			type: 'string',
			required: true
		},
		uuid: {
			type: 'string',
			isUUID: true,
			required: true,
		}

		//  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
		//  ║╣ ║║║╠╩╗║╣  ║║╚═╗
		//  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


		//  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
		//  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
		//  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

	},
	beforeCreate: function ( recordToCreate, proceed ) {
		if(!recordToCreate.uuid) {
			recordToCreate.uuid = uuid.v4();
		}
		return proceed();
	}

};

