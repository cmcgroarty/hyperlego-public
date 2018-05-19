module.exports = {


	friendlyName: 'Get scores played',


	description: '',


	inputs: {},


	exits: {
	},


	fn: async function ( inputs, exits ) {

		let scoreRecords = await Score.find({limit: 100}).sort('id ASC').populate('match');

		scoreRecords = scoreRecords.filter(score => score.match.status === 'played');

		return exits.success(scoreRecords);

	}


};
