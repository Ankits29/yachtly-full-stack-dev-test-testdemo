const express = require('express');
const app = express();
const models = require('./models');

app.get('/api/users/all', function(req, res){
	models.student.findAll().then(function(student){
		res.send(student)
	})
});

app.post('/api/user/add', function(req, res){
	var student = models.student.build({
		userID : req.body.userID,
		name : req.body.name,
		email : req.body.email,
		phoneNumber : req.body.phoneNumber,
		address : req.body.address
	});
	student.save().then(function(newStudent){
		res.json(newStudent)	
	}) 
})

app.post('/api/user/findone', function(req, res){
	console.log('@@@@', req.body.id)
	models.student.findById(req.body.id).then(function(student){
		res.json(student)
	})
});

app.listen(3000, function(){
	console.log('server listining to port 3000...')
})