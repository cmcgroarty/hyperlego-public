/**
 * Sails Seed Settings
 * (sails.config.seeds)
 *
 * Configuration for the data seeding in Sails.
 *
 * For more information on configuration, check out:
 * http://github.com/frostme/sails-seed
 */

module.exports.seeds = {
	school: {
		data: require('../.config/mocks/schools'),
		active: true,
		priority: 90,
		overwrite: true
	},
	team: {
		data: require('../.config/mocks/teams'),
		active: true,
		priority: 90,
		overwrite: true
	},
	match: {
		data: require('../.config/mocks/matches'),
		active: true,
		priority: 90,
		overwrite: true
	},
	score: {
		data: require('../.config/mocks/scores'),
		active: true,
		priority: 90,
		overwrite: true
	},
	permission: {
		data: require('../.config/mocks/permissions'),
		active: true,
		priority: 0,
		overwrite: true
	},
	role: {
		data: require('../.config/mocks/roles'),
		active: true,
		priority: 10,
		overwrite: true
	},
	user: {
		data: require('../.config/mocks/users'),
		active: true,
		priority: 20,
		overwrite: true
	},
	auth: {
		data: require('../.config/mocks/auths'),
		active: true,
		priority: 10,
		overwrite: true
	}


};
