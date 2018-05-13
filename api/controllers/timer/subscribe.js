/**
 * Module dependencies
 */

// ...


/**
 * timer/subscribe.js
 *
 * Subscribe timer.
 */
module.exports = async function subscribe(req, res) {
	if (!req.isSocket) {
		return res.badRequest();
	}

	sails.sockets.join(req, TimerService.room, function (err) {
		if (err) {
			return res.serverError(err);
		}
		return res.json(TimerService.timer);
	});

};
