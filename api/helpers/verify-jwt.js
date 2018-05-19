module.exports = {


	friendlyName: 'Verify jwt',


	description: '',


	inputs: {
		token: {
			type: 'string'
		}
	},


	exits: {
	},


	fn: async function ( inputs, exits ) {
		const jwt = require( 'jsonwebtoken' );
		if ( inputs.token ) {
			sails.log.debug('has token');
			const jwtRecord = await Jwt.findOne( { token: inputs.token } );
			if ( jwtRecord ) {
				sails.log.debug('has jwt record');
				if ( !jwtRecord.revoked ) {
					sails.log.debug('not revoked');
					let options = {
						algorithms: [ sails.hyperconfig.jsonwebtoken.algorithm ]
					};
					let payload = undefined;
					jwt.verify( jwtRecord.token, sails.hyperconfig.jsonwebtoken.secret, ( err ) => {
						if ( !err ) {
							sails.log.debug('not expired');
							return exits.success(true);
						}
					} );
				}
			} else {
				sails.log.debug('has no record');
			}
		}

		// All done.
		return exits.success(false);

	}


};

