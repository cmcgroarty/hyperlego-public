/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */

module.exports.policies = {

	/***************************************************************************
	 *                                                                          *
	 * Default policy for all controllers and actions, unless overridden.       *
	 * (`true` allows public access)                                            *
	 *                                                                          *
	 ***************************************************************************/

	'*': true,

	AuthController: {
		me: [ 'is-logged-in' ],
		login: [ 'is-not-socket' ],
		logout: [ true ]
	},
	TeamController: {
		find: [ true ],
		findOne: [ true ]
	},
	MatchController: {
		find: [ true ],
		findOne: [ true ],
	},
	'match/get-current-match':[ true ],
	'match/set-next-match':[ true ],
	RequestController: {
		rateLimitCreate: [ true ]
	},
	ScoreController: {
		getNotNullPlayed: [ true ],
		update: [ 'is-logged-in' ]
	},
	'timer/subscribe': [ true ],
	'timer/start': [ true ],
	'timer/stop': [ true ],
	'timer/reset': [ true ],
	'spotify/search-track': [ true ],
	'spotify/image': [ true ],


};
