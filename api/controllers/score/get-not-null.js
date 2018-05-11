/**
 * Module dependencies
 */

// ...


/**
 * score/get-not-null.js
 *
 * Get not null.
 */
module.exports = async function getNotNull(req, res) {

  try {
	  let nonNullScores = await Score.find( { total_score: { '!=': null } } ).populate('team').populate('match');
	  return res.ok(nonNullScores);
  } catch(e){
  	return res.negotiate(e);
  }


};
