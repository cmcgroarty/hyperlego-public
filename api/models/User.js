/**
 * User.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

	attributes: {

		//  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
		//  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
		//  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
		firstName: {
			type: 'string',
			required: true,
			maxLength: 15,
			minLength: 2
		},
		lastName: {
			type: 'string',
			required: true,
			maxLength: 15,
			minLength: 2
		},
		salutation: {
			type: 'string'
		},
		emailStatus: {
			type: 'string',
			isIn: [ 'unconfirmed', 'changeRequested', 'confirmed' ],
			defaultsTo: 'confirmed'
		},
		emailChangeCandidate: {
			type: 'string',
			isEmail: true,
			description: 'The (still-unconfirmed) email address that this user wants to change to.'
		},

		//  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
		//  ║╣ ║║║╠╩╗║╣  ║║╚═╗
		//  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


		//  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
		//  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
		//  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
		auth: {
			model: 'auth',
			unique: true,
		},
		attempts: {
			collection: 'attempt',
			via: 'user'
		},
		jsonWebTokens: {
			collection: 'jwt',
			via: 'owner'
		},
		roles: {
			collection: 'role',
			via: 'users',
			dominant: true
		}

	},

};

