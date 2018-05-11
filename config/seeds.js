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
		priority: 0,
		overwrite: true
	},
	team: {
		data: require('../.config/mocks/teams'),
		active: true,
		priority: 0,
		overwrite: true
	},
	match: {
		data: require('../.config/mocks/matches'),
		active: true,
		priority: 0,
		overwrite: true
	},
	score: {
		data: require('../.config/mocks/scores'),
		active: true,
		priority: 0,
		overwrite: true
	},


};
