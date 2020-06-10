let AWS = require('aws-sdk');
const sns = new AWS.SNS();

exports.handler = async (event) => {

	let receiver = event['receiver'];
	let sender = event['sender'];
	let message = event['message'];

	let isPromotional = true;

	console.log("Sending message", message, "to receiver", receiver);

	try {
		let data = await sns.publish({
			Message: message,
			MessageAttributes: {
				'AWS.SNS.SMS.SMSType': {
					DataType: 'String',
					StringValue: 'Promotional'
				},
				'AWS.SNS.SMS.SenderID': {
					DataType: 'String',
					StringValue: sender
				},
			},
			PhoneNumber: receiver
		}).promise();

		console.log("Sent message to", receiver);
		return data;

	} catch (err) {
		console.log("Sending failed", err);
		throw err;
	}
}