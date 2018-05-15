/**
 * Module dependencies
 */

// ...


/**
 * match/get-current-match.js
 *
 * Get current match.
 */
module.exports = async function getCurrentMatch( req, res ) {

	try {
		let currentMatch = await Match.findOne( { status: 'playing' } ).populate('scores');
		if(!currentMatch){
			return res.notFound('No Match Currently Playing');
		}
		return res.json(currentMatch);

	} catch ( e ) {
		return res.negotiate( e );
	}

};
