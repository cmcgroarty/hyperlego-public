/**
 * Module dependencies
 */

// ...


/**
 * timer/start.js
 *
 * Start timer.
 */
module.exports = async function start( req, res ) {

	TimerService.start();
	return res.json(TimerService.timer);

};
