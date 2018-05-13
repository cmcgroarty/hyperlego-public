/**
 * Module dependencies
 */

// ...


/**
 * timer/stop.js
 *
 * Stop timer.
 */
module.exports = async function stop(req, res) {

	TimerService.stop();
	return res.ok();

};
