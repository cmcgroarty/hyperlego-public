/**
 * Jin environment settings
 * (sails.config.*)
 *
 * What you see below is a quick outline of the built-in settings you need
 * to configure your Sails app for production.  The configuration in this file
 * is only used in your production environment, i.e. when you lift your app using:
 *
 * ```
 * NODE_ENV=jin node app
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
const fs = require( 'fs' );
const pth = require( 'path' );
const hyperconfig = require( '../../.config/' );
const name = 'jin';
module.exports = {
	log: {
		level: 'debug'
	},
	ssl: {
		cert: fs.readFileSync( pth.resolve( __dirname, hyperconfig.ssl[ name ].cert ) ),
		key: fs.readFileSync( pth.resolve( __dirname, hyperconfig.ssl[ name ].key ) ),
	},
	session: {
		name: hyperconfig.cookie[ name ].sails_session.key,
		secret: hyperconfig.cookie[ name ].sails_session.secret
	},
	security: {
		cors: {
			allowOrigins: [
				'https://lego.hyperonline.org',
			],
			allowCredentials: true,
		},

	},
};