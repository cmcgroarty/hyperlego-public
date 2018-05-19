/**
 * Module dependencies
 */

// ...


/**
 * auth/login-old.js
 *
 * LoginOld auth.
 */
module.exports = async function loginOld(req, res) {

	const authError = {message:'Invalid Username/Password Combination'};

	const authRecord = await Auth.findOne({username: req.param('username').toLowerCase()}).populate('user');

	if(!authRecord) {
		return res.unauthorized(authError);
	}

	await sails.helpers.passwords.checkPassword(req.param('password'), authRecord.password).intercept('incorrect', () => {return res.unauthorized(authError);});

	req.session.cookie.maxAge = sails.config.custom.rememberMeCookieMaxAge;

	req.session.userId = authRecord.user.id;


	res.cookie('hypertest', {test: 'test'});
	return res.ok({ message: 'Welcome ' + authRecord.user.firstName + '!', me: authRecord });

};