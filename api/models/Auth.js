/**
 * Auth.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

	attributes: {

		//  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
		//  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
		//  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

		username: {
			type: 'string',
			required: true,
			unique: true,
			maxLength: 25,
			minLength: 3,
			regex: /^[a-z0-9_-]+$/
		},
		email: {
			type: 'string',
			required: true,
			unique: true,
			isEmail: true,
			maxLength: 200,
			example: 'user@hyperalumni.org'
		},
		password: {
			type: 'string',
			required: true,
			protect: true,
			description: 'Securely hashed representation of the user\'s login password.'
		},

		//  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
		//  ║╣ ║║║╠╩╗║╣  ║║╚═╗
		//  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


		//  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
		//  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
		//  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
		user: {
			model: 'user'
		},

	},
	customToJSON: function () {
		return _.omit(this, ['password'])
	},
	beforeCreate: async function ( recordToCreate, proceed ) {
		if ( recordToCreate.password ) {
			recordToCreate.password = await sails.helpers.passwords.hashPassword( recordToCreate.password );
		}
		return proceed();
	},
	beforeUpdate: async function ( recordToUpdate, proceed ) {
		if ( recordToCreate.password ) {
			recordToCreate.password = await sails.helpers.passwords.hashPassword( recordToUpdate.password );
		}
		return proceed();
	}

};

