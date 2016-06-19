var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var msgSchema = new Schema({

		"msgid": String,
			"dateTimeReceived": {"type":Date, "default":Date()},
			"dateAvailable": {"type":Date, "default":Date()},
		"senderuser": {
			"type": Schema.ObjectId,
			"ref": "users"
		},
		"recipientuser": {
			"type": Schema.ObjectId,
			"ref": "users"
		},
		//Send pictures, videos, gifs, or just plain text
		"content": [],
		"location": {
			"lat": String,
			"lng": String
		}


});

var Msg = mongoose.model('msgs', msgSchema);

module.exports = Msg;