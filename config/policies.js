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
		me: [ true ],
		login: [ true ],
		logout: [ true ]
	},
	TeamController: {
		find: [ true ],
		findOne: [ true ]
	},
	MatchController: {
		find: [ true ],
		findOne: [ true ],
		getCurrentMatch: ['is-logged-in'],
		setNextMatch: ['is-logged-in']
	},
	RequestController: {
		rateLimitCreate: [ true ]
	},
	ScoreController: {
		getNotNullPlayed: [ true ],
		update: [ 'is-logged-in' ]
	},
	TimerController: {
		subscribe: [ 'is-logged-in' ],
		start: [ true ],
		stop: [ 'is-logged-in' ],
		reset: [ 'is-logged-in' ]
	},
	'spotify/search-track': [ true ],
	'spotify/image': [ true ],


};
