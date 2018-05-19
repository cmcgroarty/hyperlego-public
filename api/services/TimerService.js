/**
 * TimerService
 *
 * @description :: Server-side logic for helping manage Timers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Services
 */
const defaultTime = 150;
const status = {ready: 'ready', running: 'running', stopped: 'stopped'};
module.exports = {
	room: 'hyperlegoTimer',
	updateType: 'timerUpdate',
	interval: null,
	publishing: null,
	timer: {
		status: status.ready,
		time: defaultTime
	},
	start: function () {
		if (this.timer.status == status.ready) {
			this.clear();
			this.timer.status = status.running;
			this.run();
			this.interval = setInterval(this.run, 1000);
			this.publishing = setInterval(this.chat, 250);
		}
	},
	run: function () {
		this.timer.time -= 1;
		if (this.timer.time <= 0) {
			this.clear();
			this.chat();
		}
	},
	stop: function () {
		if (this.timer.status == status.running) {
			this.clear();
			this.timer.status = status.stopped;
			this.chat();
		}
	},
	reset: function () {
		if (this.timer.status != status.running || this.timer.time == 0) {
			this.timer.status = status.ready;
			this.timer.time = defaultTime;
			this.chat();
		}
	},
	clear: function () {
		if (this.interval != null) {
			clearInterval(this.interval);
			this.interval = null;
		}
		if(this.publishing != null) {
			clearInterval(this.publishing);
			this.publishing = null;
		}
	},
	chat: function () {
		sails.sockets.broadcast(this.room, this.updateType, this.timer);
	}
};

