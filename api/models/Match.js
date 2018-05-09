/**
 * Match.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
module.exports = {
	primaryKey: 'id',
	attributes: {
		//  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
		//  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
		//  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
		id: {
			type: 'number',
			required: true,
			unique: true,
			isInteger: true,
			min: 0
		},
		time: {
			type: 'ref',
			columnType: 'datetime'
		},
		type: {
			type: 'string',
			isIn:  [ 'practice', 'qualification', 'elimination', 'replay' ],
			defaultsTo: 'practice'
		},
		round: {
			type: 'number',
			isInteger: true,
			min: 0
		},
		status: {
			type: 'string',
			isIn: [ 'unplayed', 'playing', 'played' ],
			defaultsTo: 'unplayed'
		},

		//  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
		//  ║╣ ║║║╠╩╗║╣  ║║╚═╗
		//  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


		//  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
		//  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
		//  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
		scores: {
			collection: 'score',
			via: 'match'
		}
	},

};

