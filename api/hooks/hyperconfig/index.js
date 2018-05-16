/**
 * hyperconfig hook
 *
 * @description :: A hook definition.  Extends Sails by adding shadow routes, implicit actions, and/or initialization logic.
 * @docs        :: https://sailsjs.com/docs/concepts/extending-sails/hooks
 */

module.exports = function defineHyperConfigHook( sails ) {

	return {

		configure: function(){
			require( 'no-config' )( {
				config: require( '../../../.config' )
			} ).then(
				function ( conf ) {
					let db = conf.mysql.hyperlego;
					sails.config.datastores.default = {
						adapter: 'sails-mysql',
						url: 'mysql://' + db.user + ':' + db.password + '@' + db.host
						+ ( db.port ? ':' + db.port : '' ) + '/' + db.database
					};
					sails.config.port = conf.api.port;
					if(conf.ssl.use){
						var fs = require('fs');
						sails.config.ssl = {
							key: fs.readFileSync(require('path').resolve(__dirname, conf.ssl.key)),
							cert: fs.readFileSync(require('path').resolve(__dirname, conf.ssl.cert))
						};
					}

				} );
		},

		/**
		 * Runs when a Sails app loads/lifts.
		 *
		 * @param {Function} done
		 */
		initialize: function ( done ) {

			sails.log.info( 'Initializing custom hook (`hyperconfig`)' );
			return done();
		}

	};

};
