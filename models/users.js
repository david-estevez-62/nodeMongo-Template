var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
			"firstname": String,
			"lastname": String,
			"username": {
			    "type": String,
			    "required": true,
			    "unique": true
			},
			"password": {
				"type": String,
			    "required": true
			},
			"profpic": {"type":String, "default":"/img/gravatar.jpg"},
			"connections": [String],
			"msgsreceived": [],
			"msgssent": []
});

var User = mongoose.model('users', userSchema);



// var movieInstance = new Movie({
// 	title: 'Star Wars'
// });

// movieInstance.save(function(err,result){
// 	console.log('err:', err);
// 	console.log('result:', result);
// });

module.exports = User;