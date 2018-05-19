module.exports = {


	friendlyName: 'Login',


	description: 'Login using the provided username and password combination.',


	inputs: {
		username: { type: 'string', required: true },
		password: { type: 'string', required: true }
	},


	exits: {
		success: {
			responseType: 'ok'
		},
		badCombo: {
			responseType: 'unauthorized'
		}
	},


	fn: async function ( inputs, exits ) {

		const authError = { badCombo: { message: 'Invalid Username/Password Combination' } };

		const authRecord = await Auth.findOne( { username: inputs.username.toLowerCase() } );
		if ( !authRecord ) {
			throw authError;
		}

		await sails.helpers.passwords.checkPassword( inputs.password, authRecord.password ).intercept( 'incorrect', () => {
			return authError;
		} );

		let userRecord = await User.findOne({id: authRecord.user}).populate('roles');
		userRecord.auth = authRecord;

		const jwt = await sails.helpers.generateJwt(userRecord);
		await Jwt.create({token:jwt.token, owner: userRecord.id, uses: []}).fetch();

		const jwtcookie = sails.hyperconfig.cookie.hyperlego_jwt;
		this.res.cookie(jwtcookie.key, jwt.token, {secure: jwtcookie.secure, httpOnly: jwtcookie.http, path:jwtcookie.path, maxAge: jwt.expiresIn, sameSite: jwtcookie.samesite});

		return exits.success( { token: jwt.token,message: 'Welcome ' + userRecord.firstName + '!', me: authRecord } );



	}


};
