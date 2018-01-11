const express = require('express');
const app = express();
const bodyParser    = require('body-parser');
const models = require('./models');
app.use(bodyParser.json());

app.use(express.static(__dirname+'/front-end'));

app.use(function(req,res,next){
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

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

app.post('/api/user/edit', function(req, res){
	models.student.update({
		userID : req.body.userID,
		name : req.body.name,
		email : req.body.email,
		phoneNumber : req.body.phoneNumber,
		address : req.body.address
	}, { 
				where: {id: req.body.id} 
			}
	).then(function(result){
		console.log(result[0])
		if(result[0])res.send(true)
	})
})

app.delete('/api/user', function(req, res){
	console.log('here')
	models.student.destroy({
		where : {
			id : req.body.id
		}
	}).then(function(result){
		if(result)res.send(true)
	})
})

app.listen(3000, function(){
	console.log('server listining to port 3000...')
})