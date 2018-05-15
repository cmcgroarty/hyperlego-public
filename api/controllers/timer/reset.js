/**
 * Module dependencies
 */

// ...


/**
 * timer/reset.js
 *
 * Reset timer.
 */
module.exports = async function reset(req, res) {

	TimerService.reset();
	return res.json(TimerService.timer);

};
