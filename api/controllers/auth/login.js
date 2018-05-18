module.exports = {


	friendlyName: 'Login',


	description: 'Login using the provided username and password combination.',


	inputs: {
		username: { type: 'string', required: true },
		password: { type: 'string', required: true }
	},


	exits: {
		success: {
		},
		badCombo: {
			responseType: 'unauthorized'
		}
	},


	fn: async function ( inputs, exits ) {

		const authError = { badCombo: { message: 'Invalid Username/Password Combination' } };

		const authRecord = await Auth.findOne( { username: inputs.username.toLowerCase() } ).populate( 'user' );
		if ( !authRecord ) {
			throw authError;
		}

		await sails.helpers.passwords.checkPassword( inputs.password, authRecord.password ).intercept( 'incorrect', () => {
			return authError;
		} );

		if ( this.req.isSocket ) {
			sails.log.warn(
				'Received `rememberMe: true` from a virtual request, but it was ignored\n' +
				'because a browser\'s session cookie cannot be reset over sockets.\n' +
				'Please use a traditional HTTP request instead.'
			);
		} else {
			sails.log.debug('not socket');
			this.req.session.cookie.maxAge = sails.config.custom.rememberMeCookieMaxAge;
		}
		sails.log.debug( 'authrecord: ' + authRecord.user.id );
		this.req.session.userId = authRecord.user.id;
		sails.log.debug( 'session.userId: ' + this.req.session.userId );
		return exits.success( { message: 'Welcome ' + authRecord.user.firstName + '!', me: authRecord } );



	}


};
