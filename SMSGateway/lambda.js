let AWS = require('aws-sdk');
exports.handler = function(event, context, callback) {

	let receiver = event['receiver'];
	let sender = event['sender'];
	let message = event['message'];

	console.log("Sending message", message, "to receiver", receiver);

	callback(null,'Successfully executed');
}