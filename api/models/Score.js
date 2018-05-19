/**
 * Score.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
module.exports = {
	primaryKey: 'id',
	attributes: {

		//  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
		//  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
		//  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
		id: {
			type: 'number',
			unique: true,
			isInteger: true,
			autoIncrement: true,
			min: 0
		},
		table_name: {
			type: 'string',
			isIn: [ 'ONE_A', 'ONE_B', 'TWO_A', 'TWO_B' ],
			required: true
		},
		total_score: {
			type: 'number',
			isInteger: true,
			allowNull: true,
			min: 0
		},
		score_openingdoors_dooropened: {
			type: 'boolean',
			allowNull: true
		},
		score_cloud_sdcardup: {
			type: 'boolean',
			allowNull: true
		},
		score_community_loopnottouching: {
			type: 'boolean',
			allowNull: true
		},
		score_robotics_insertinstalled: {
			type: 'boolean',
			allowNull: true
		},
		score_robotics_loopnottouching: {
			type: 'boolean',
			allowNull: true
		},
		score_rightsenses_loopnottouching: {
			type: 'boolean',
			allowNull: true
		},
		score_outsidethebox_model: {
			type: 'boolean',
			allowNull: true
		},
		score_outsidethebox_bulb: {
			type: 'boolean',
			allowNull: true
		},
		score_remotecomm_sliderpulled: {
			type: 'boolean',
			allowNull: true
		},
		score_searchengine_wheelspun: {
			type: 'boolean',
			allowNull: true
		},
		score_searchengine_loopremoved: {
			type: 'boolean',
			allowNull: true
		},
		score_sports_shottaken: {
			type: 'boolean',
			allowNull: true
		},
		score_sports_goal: {
			type: 'boolean',
			allowNull: true
		},
		score_engineering_basket: {
			type: 'boolean',
			allowNull: true
		},
		score_engineering_model: {
			type: 'boolean',
			allowNull: true
		},
		score_adapting_modelrotated: {
			type: 'boolean',
			allowNull: true
		},
		score_apprenticeship_notinbase: {
			type: 'boolean',
			allowNull: true
		},
		score_apprenticeship_touchingcircle: {
			type: 'boolean',
			allowNull: true
		},
		score_apprenticeship_modelpresented: {
			type: 'boolean',
			allowNull: true
		},
		score_engagement_yellowmoved: {
			type: 'boolean',
			allowNull: true
		},
		score_engagement_dialcolor: {
			type: 'number',
			min: 0,
			max: 58,
			allowNull: true
		},
		score_engagement_ticks: {
			type: 'number',
			min: 0,
			max: 5,
			allowNull: true
		},
		score_projectlearning_loops: {
			type: 'number',
			min: 0,
			max: 8,
			allowNull: true
		},
		score_penalties_junk: {
			type: 'number',
			min: 0,
			max: 8,
			allowNull: true
		},

		//  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
		//  ║╣ ║║║╠╩╗║╣  ║║╚═╗
		//  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


		//  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
		//  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
		//  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

		match: {
			model: 'match',
			required: true
		},
		team: {
			model: 'team',
			required: true
		}
	},

};

