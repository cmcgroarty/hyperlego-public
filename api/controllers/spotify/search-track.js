/**
 * Module dependencies
 */

// ...


/**
 * spotify/search-track.js
 *
 * Search track.
 */
module.exports = async function searchTrack(req, res) {

	if (req.isSocket) {
		return res.badRequest();
	}

	try{
		let spotifyResponse = await sails.spotifyWebApi.searchTracks(req.param('term'), {limit:12});
		console.log('Spotify searched for "' + req.param('term') + '"', spotifyResponse.body);
		if(spotifyResponse) {
			return res.json(spotifyResponse.body.tracks.items);
		}
	} catch (e) {
		return res.serverError(e);
	}
};
