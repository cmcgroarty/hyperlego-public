module.exports = {


	friendlyName: 'Generate jwt',


	description: '',


	inputs: {
		user: {
			type: 'json'
		}
	},


	exits: {},


	fn: async function ( inputs, exits ) {
		let jwt = require( 'jsonwebtoken' );
		const uuid = require( 'uuid' );
		const ms = require( 'ms' );

		let user = {
			username: inputs.user.auth.username,
			firstName: inputs.user.firstName,
			lastName: inputs.user.lastName,
			roles: []
		};

		let options = {
			algorithm: sails.hyperconfig.jsonwebtoken.algorithm,
			issuer: sails.hyperconfig.jsonwebtoken.issuer,
			expiresIn: sails.hyperconfig.jsonwebtoken.expiresIn,
			jwtid: uuid.v1(),
			issuer: inputs.user.auth.username +'|lego.hyperonline.org'
		};

		let token = jwt.sign( user, sails.hyperconfig.jsonwebtoken.secret, options );

		// All done.
		return exits.success( { token: token, expiresIn: ms( sails.hyperconfig.jsonwebtoken.expiresIn ) } );

	}


};

