/**
 * hyperconfig hook
 *
 * @description :: A hook definition.  Extends Sails by adding shadow routes, implicit actions, and/or initialization logic.
 * @docs        :: https://sailsjs.com/docs/concepts/extending-sails/hooks
 */

module.exports = function defineHyperConfigHook( sails ) {

	return {

		configure: function () {
		},

		/**
		 * Runs when a Sails app loads/lifts.
		 *
		 * @param {Function} done
		 */
		initialize: function ( done ) {

			sails.log.info( 'Initializing custom hook (`hyperconfig`)' );
			require( 'no-config' )( {
				config: require( '../../../.config' )
			} ).then(
				function ( conf ) {
					if ( conf ) {
						let db = conf.mysql.hyperlego;
						sails.config.datastores.default = {
							adapter: 'sails-mysql',
							url: 'mysql://' + db.user + ':' + db.password + '@' + db.host
							+ ( db.port ? ':' + db.port : '' ) + '/' + db.database
						};
						sails.config.port = conf.api.port;
						sails.hyperconfig = conf;
						done();
					} else {
						done();
					}
				} );

		}

	};

};
