/**
 * Module dependencies
 */

// ...


/**
 * djrequest/rate-limit-create.js
 *
 * Rate limit create.
 */
module.exports = async function rateLimitCreate( req, res ) {

	async function createRequest() {
		try {
			const createdRequest = await Request.create( req.allParams() ).fetch();
			sails.log.verbose( createdRequest );
			if ( createdRequest ) {
				return res.json( createdRequest );
			} else {
				return res.badRequest( { message: 'Error Submitting Request. Try Again.' } );
			}
		} catch ( e ) {
			switch ( e.code ) {
				case 'E_UNIQUE':
					return res.badRequest( { message: 'Song Already Requested' } );
				default:
					return res.negotiate( e );
			}

		}

	}

	if ( req.param( 'uuid' ) ) {
		let latestRequest = await Request.find( {
			where: { uuid: req.param( 'uuid' ) },
			limit: 1,
			sort: 'createdAt DESC'
		} );
		if ( latestRequest.length > 0 ) {
			sails.log.verbose( latestRequest );
			latestRequest = latestRequest[ 0 ];
			const now = sails.moment();
			const lastRequestTime = sails.moment( latestRequest.createdAt );

			if ( now.isBefore( lastRequestTime.add( 2, 'minutes' ) ) ) {
				return res.tooManyRequests( { message: 'Too Many Requests. Slow Down.' } );
			} else {
				return createRequest();
			}
		} else {
			return createRequest();
		}
	}
	return createRequest();

};
