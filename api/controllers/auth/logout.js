module.exports = {


	friendlyName: 'Logout',


	description: 'Logout auth.',


	inputs: {},


	exits: {
		success: {
			statusCode: 205
		},
		redirect: {
			responseType: 'redirect'
		}

	},


	fn: async function ( inputs, exits ) {

		sails.log.debug('logout');
		delete this.req.session.userId;

		if ( !this.req.wantsJSON ) {
			throw { redirect: '/login' };
		} else {
			return exits.success();
		}

	}


};
