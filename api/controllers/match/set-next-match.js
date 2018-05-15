/**
 * Module dependencies
 */

// ...


/**
 * match/set-next-match.js
 *
 * Set next match.
 */
module.exports = async function setNextMatch( req, res ) {

	try {
		let currentMatch = await Match.findOne( { status: 'playing' } );
		if ( currentMatch ) {
			await Match.update( currentMatch.id ).set( { status: 'played' } ).fetch();
		}
		const hasMatchID = req.param( 'id' ) !== undefined;
		let nextMatchParams = {};
		if ( hasMatchID ) {
			nextMatchParams = { id: req.param( 'id' ) };
		} else {
			let lowestUnplayed = await Match.find( { where: { status: 'unplayed' }, limit: 1, sort: 'id ASC' } );
			if ( lowestUnplayed[0] === undefined ) {
				return res.json( {} );
			} else {
				nextMatchParams = { id: lowestUnplayed[0].id };
			}
		}
		let nextMatch = await Match.update( nextMatchParams ).set( { status: 'playing' } ).fetch();

		if ( nextMatch[0] === undefined ) {
			return res.notFound( 'Match #' + req.param( 'id' ) + ' does not exist' );
		} else {
			return res.json( nextMatch[0] );
		}

	} catch ( e ) {
		return res.negotiate( e );
	}

};
