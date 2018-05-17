/**
 * hyperglobals hook
 *
 * @description :: A hook definition.  Extends Sails by adding shadow routes, implicit actions, and/or initialization logic.
 * @docs        :: https://sailsjs.com/docs/concepts/extending-sails/hooks
 */

module.exports = function defineHyperglobalsHook(sails) {

  return {

    /**
     * Runs when a Sails app loads/lifts.
     *
     * @param {Function} done
     */
    initialize: function (done) {

      sails.log.info('Initializing custom hook (`hyperglobals`)');

		sails.moment = require('moment');
		sails.https = require('https');
		sails.http = require('http');
      return done();

    }

  };

};
