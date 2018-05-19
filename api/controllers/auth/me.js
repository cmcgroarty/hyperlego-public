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

		if(this.req.session.userId) {
			let userRecord = await User.findOne(this.req.session.userId).populate('roles').populate('auth');
			if(userRecord) {
				user.me = userRecord;
			}
		}

		return exits.success(user);

	}


};
