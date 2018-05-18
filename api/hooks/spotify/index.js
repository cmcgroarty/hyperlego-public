/**
 * spotify hook
 *
 * @description :: A hook definition.  Extends Sails by adding shadow routes, implicit actions, and/or initialization logic.
 * @docs        :: https://sailsjs.com/docs/concepts/extending-sails/hooks
 */

module.exports = function defineSpotifyHook( sails ) {

	return {

		/**
		 * Runs when a Sails app loads/lifts.
		 *
		 * @param {Function} done
		 */
		initialize: function ( done ) {

			sails.log.info( 'Initializing custom hook (`spotify`)' );
			require( 'no-config' )( {
				config: require( '../../../.config' )
			} ).then(
				function ( conf ) {
					if ( conf ) {
						const SpotifyWebApi = require( 'spotify-web-api-node' );
						sails.spotifyWebApi = new SpotifyWebApi( {
							clientId: conf.spotify.auth.client.id,
							clientSecret: conf.spotify.auth.client.secret,
							redirectUri: conf.spotify.auth.client.redirectUri
						} );
						sails.spotifyWebApi.clientCredentialsGrant().then(
							function ( data ) {
								sails.log.verbose( 'The access token expires in ' + data.body[ 'expires_in' ] );
								sails.log.verbose( 'The access token is ' + data.body[ 'access_token' ] );

								// Save the access token so that it's used in future calls
								sails.spotifyWebApi.setAccessToken( data.body[ 'access_token' ] );
								done();
							},
							function ( err ) {
								sails.log.error( 'Something went wrong when retrieving an access token', err );
								done();
							}
						);

					} else {
						return done();
					}
				} );


		}

	};

};
