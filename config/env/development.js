/**
 * Development environment settings
 * (sails.config.*)
 *
 * What you see below is a quick outline of the built-in settings you need
 * to configure your Sails app for production.  The configuration in this file
 * is only used in your production environment, i.e. when you lift your app using:
 *
 * ```
 * NODE_ENV=development node app
 * ```
 *
 * > If you're using git as a version control solution for your Sails app,
 * > this file WILL BE COMMITTED to your repository by default, unless you add
 * > it to your .gitignore file.  If your repository will be publicly viewable,
 * > don't add private/sensitive data (like API secrets / db passwords) to this file!
 *
 * For more best practices and tips, see:
 * https://sailsjs.com/docs/concepts/deployment
 */
const hyperconfig = require('../../.config/');
const name = 'development';
module.exports = {
	log: {
		level: 'info'
	},
	session: {
		name: hyperconfig.cookie[name].sails_session.key,
		secret: hyperconfig.cookie[name].sails_session.secret,

		cookie: {
			maxAge: 24 * 60 * 60 * 1000,  // 24 hours
		},
	}

};