/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {


	//  ╦ ╦╔═╗╔╗ ╔═╗╔═╗╔═╗╔═╗╔═╗
	//  ║║║║╣ ╠╩╗╠═╝╠═╣║ ╦║╣ ╚═╗
	//  ╚╩╝╚═╝╚═╝╩  ╩ ╩╚═╝╚═╝╚═╝

	/***************************************************************************
	 *                                                                          *
	 * Make the view located at `views/homepage.ejs` your home page.            *
	 *                                                                          *
	 * (Alternatively, remove this and add an `index.html` file in your         *
	 * `assets` directory)                                                      *
	 *                                                                          *
	 ***************************************************************************/

	'/': {
		view: 'pages/homepage'
	},

	/***************************************************************************
	 *                                                                          *
	 * More custom routes here...                                               *
	 * (See https://sailsjs.com/config/routes for examples.)                    *
	 *                                                                          *
	 * If a request to a URL doesn't match any of the routes in this file, it   *
	 * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
	 * not match any of those, it is matched against static assets.             *
	 *                                                                          *
	 ***************************************************************************/


	//  ╔═╗╔═╗╦  ╔═╗╔╗╔╔╦╗╔═╗╔═╗╦╔╗╔╔╦╗╔═╗
	//  ╠═╣╠═╝║  ║╣ ║║║ ║║╠═╝║ ║║║║║ ║ ╚═╗
	//  ╩ ╩╩  ╩  ╚═╝╝╚╝═╩╝╩  ╚═╝╩╝╚╝ ╩ ╚═╝
	/**
	 *    MATCH
	 */
	'GET /api/match/current': 'match/get-current-match',
	'POST /api/match/next': 'match/set-next-match',

	/**
	 *    SCORE
	 */
	'GET /api/score/not/null': 'score/get-not-null-played',

	/**
	 *    TIMER
	 */
	'POST /api/timer/': 'timer/subscribe',
	'POST /api/timer/control/start/': 'timer/start',
	'POST /api/timer/control/stop/': 'timer/stop',
	'POST /api/timer/control/reset/': 'timer/reset',

	/**
	 *    SPOTIFY
	 */
	'GET /api/spotify/track': 'spotify/search-track',
	'GET /api/spotify/image/:image': 'spotify/image',

	/**
	 *    DJ REQUEST
	 */
	'POST /api/djrequest': 'request/create',

	/**
	 *    AUTH
	 */
	'POST /api/auth/login':'auth/login',
	'GET /api/auth/logout':'auth/logout',


	//  ╦ ╦╔═╗╔╗ ╦ ╦╔═╗╔═╗╦╔═╔═╗
	//  ║║║║╣ ╠╩╗╠═╣║ ║║ ║╠╩╗╚═╗
	//  ╚╩╝╚═╝╚═╝╩ ╩╚═╝╚═╝╩ ╩╚═╝


	//  ╔╦╗╦╔═╗╔═╗
	//  ║║║║╚═╗║
	//  ╩ ╩╩╚═╝╚═╝


};
