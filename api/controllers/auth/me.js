module.exports = {


	friendlyName: 'Me',


	description: 'Me auth.',


	inputs: {},


	exits: {
		success: {
			responseType: 'ok'
		}
	},


	fn: async function ( inputs, exits ) {

		let user = {me: null};

		sails.log.debug(this.req.session);
		if(this.req.session.userId) {
			let userRecord = await User.findOne(this.req.session.userId).populate('roles').populate('auth');
			sails.log.debug(userRecord);
			if(userRecord) {
				user.me = userRecord;
			}
		}

		return exits.success(user);

	}


};
