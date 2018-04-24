/**
 * Team.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
	autoPK: false,
	autoCreatedAt: true,
	autoUpdatedAt: true,

	attributes: {


		//  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
		//  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
		//  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
		id: {
			type: 'integer',
			primaryKey: true,
			required: true,
			min: 0
		},
		name: {
			type: 'string',
			required: true
		},
		division: {
			type: 'string',
			enum: ['JQA', 'JA'],
			required: true
		},
		school: {
			type: 'string',
			required: true
		},
		color: {
			type: 'string'
		},
		city: {
			type: 'string',
			required: true
		},
		state: {
			type: 'string',
			required: true
		},
		contactName: {
			type: 'string',
			defaultsTo: ''
		},
		contactEmail: {
			type: 'string',
			defaultsTo: ''
		},
		here: {
			type: 'boolean',
			defaultsTo: false
		},
		arrived: {
			type: 'datetime'
		},
		numKids: {
			type: 'integer',
			defaultsTo: 0
		},

		//  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
		//  ║╣ ║║║╠╩╗║╣  ║║╚═╗
		//  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


		//  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
		//  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
		//  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
		scores: {
			collection: 'score',
			via: 'team'
		}
	},

};

