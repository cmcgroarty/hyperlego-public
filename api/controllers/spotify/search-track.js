/**
 * Module dependencies
 */

// ...


/**
 * spotify/search-track.js
 *
 * Search track.
 */
module.exports = async function searchTrack( req, res ) {
	var searchSpotify = async function () {
		let spotifyResponse = await sails.spotifyWebApi.searchTracks( req.param( 'term' ), { limit: 12 } );
		sails.log.verbose( 'Spotify searched for "' + req.param( 'term' ) + '"', spotifyResponse.body );
		if ( spotifyResponse ) {
			return res.json( spotifyResponse.body.tracks.items );
		} else {
			return res.json( [] );
		}
	};

	if ( req.isSocket ) {
		return res.badRequest();
	}

	try {
		return await searchSpotify();
	} catch ( e ) {
		if ( e.statusCode === 401 ) {
			sails.spotifyWebApi.clientCredentialsGrant().then(
				async function ( data ) {
					sails.log.debug( 'The access token is ' + data.body[ 'access_token' ] );
					sails.spotifyWebApi.setAccessToken( data.body[ 'access_token' ] );
					try {
						return await searchSpotify();
					} catch ( e ) {
						return res.negotiate( e );
					}
				},
				function ( err ) {
					sails.log.error( 'Something went wrong when retrieving an access token', err );
					return res.negotiate(err);
				}
			);
		} else {
			return res.negotiate( e );
		}
	}
};
