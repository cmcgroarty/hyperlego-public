/**
 * Module dependencies
 */

// ...


/**
 * spotify/image.js
 *
 * Image spotify.
 */
const fs = require('fs');
const path = require('path');
module.exports = async function image(req, res) {

	//sails.log.debug(req.param('image'));
	var imageReq = req.param('image');
	var imageDir = path.resolve('.image');
	fs.stat(imageDir + '/' + imageReq, function (err, stat) {
		if (err == null) {
			sails.log.debug(imageReq+' exists, sending image from server');
			var image = fs.createReadStream(imageDir + '/' + imageReq);
			image.pipe(res);
		} else if (err.code == 'ENOENT') {
			sails.log.debug(imageReq+' doesnt exist, getting image from spotify');
			var spotifyImage = sails.https.get({
				host: 'i.scdn.co',
				path: '/image/' + imageReq
			}, function (spotify) {

				if (spotify.statusCode === 200) {
					var image = fs.createWriteStream(imageDir + '/' + imageReq);
					spotify.pipe(image);
					spotify.pipe(res);
					spotifyImage.end();
				} else {
					res.end();
					spotifyImage.end();
				}

				spotify.on('error', function (err) {
					return res.serverError(err)
				});
			});
			spotifyImage.on('error', function (err) {
				return res.serverError(err)
			});
		} else {
			spotify.log.error('Some other error: ', err.code);
		}
	});

};
