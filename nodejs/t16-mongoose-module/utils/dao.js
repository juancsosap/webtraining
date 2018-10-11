var mongoose = require('mongoose');

// Connect to Database
mongoose.connect('mongodb://test:test123@ds119343.mlab.com:19343/students', { useNewUrlParser: true });

// Create Schema
var schema = new mongoose.Schema({
	name: String,
	surname: String,
	age: Number
});

var Student = mongoose.model('Student', schema);

module.exports.get = function (offset = 0, limit = 10, cbf) {
	var result = null;
	Student.find({}).sort({_id:1}).skip(offset).limit(limit).exec(function (error, data) {
		if(error) throw error;
		cbf(data);
	});
	return result;
};

module.exports.getById = function (id, cbf) {
	Student.findOne({_id: id}).exec(function (error, data) {
		if(error) throw error;
		cbf(data);
	});
};

module.exports.post = function (item, cbf) {
	Student(item).save(function (error, data) {
		if(error) throw error;
		console.log(`Data Saved on DB : ${data}`);
		cbf(data);
	});
};

module.exports.delete = function (id, cbf) {
	Student.find({_id: id}).remove(function (error, data) {
		if(error) throw error;
		delete data["__v"];
		cbf(data);
	});
};
