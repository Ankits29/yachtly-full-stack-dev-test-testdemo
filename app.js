const express = require('express');
const app = express();
const models = require('./models');

app.get('/api/users/all', function(req, res){
	models.student.findAll().then(function(student){
		res.send(student)
	})
});

app.listen(3000, function(){
	console.log('server listining to port 3000...')
})