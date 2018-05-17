/**
 * rollbar hook
 *
 * @description :: A hook definition.  Extends Sails by adding shadow routes, implicit actions, and/or initialization logic.
 * @docs        :: https://sailsjs.com/docs/concepts/extending-sails/hooks
 */

module.exports = function defineRollbarHook( sails ) {

	return {

		/**
		 * Runs when a Sails app loads/lifts.
		 *
		 * @param {Function} done
		 */
		initialize: function ( done ) {

			sails.log.info( 'Initializing custom hook (`rollbar`)' );
			require( 'no-config' )( {
				config: require( '../../../.config' )
			} ).then(
				function ( conf ) {
					if ( conf ) {
						const Rollbar = require( 'rollbar' );
						sails.rollbar = new Rollbar( conf.rollbar.token.server );
						done();
					} else {
						done();
					}
				} );
		}

	};

};
