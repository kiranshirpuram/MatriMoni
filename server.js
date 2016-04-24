var express = require('express');
var http    = require('http');
var path    = require('path');
var fs      = require('fs');
var app 	= express();
var mkdirp = require('mkdirp');
var bodyParser = require('body-parser')//npm install --save body-parser

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
	extended: true
}));
app.configure(function() {
	app.set('port', process.env.PORT || 3001);
	app.use(express.bodyParser());
	app.use(express.static(path.join(__dirname, 'public')));    
});


app.get('/', function(req, res){
	res.sendfile(__dirname + '/index.html');
});

var MongoClient = require('mongodb').MongoClient
, format = require('util').format;
var autoIncrement = require("mongodb-autoincrement");

MongoClient.connect('mongodb://127.0.0.1:27017/MM', function(err, db) {
	if(err) throw err;

	//registration
	app.post('/add', function(req, res){
		var doc2 = {};
		doc2 = req.body;
		var collection = db.collection('userdetails');
		autoIncrement.getNextSequence(db, 'userdetails', function (err, autoIndex) {

			console.log('autoIndex:'+autoIndex);
			doc2.userId = autoIndex;

			collection.insert(doc2, {w:1}, function(err, result) {
				if (err) throw err; 
				console.log('NODE NEWLY ADDED USER : ' +result);
				res.send(result);
			});
		});

	});
	//search profile
	app.post('/find', function(req, res){
		console.log("Server post");
		var doc1 = req.body;
		var collection = db.collection('userdetails');
		for (var i in doc1) {
			if (doc1[i] === null || doc1[i] === "") {
				  // test[i] === undefined is probably not very useful here
				  delete doc1[i];
				}
			}

			collection.find(doc1).toArray(function (err, result) {
				if (err) {
					console.log(err);
					res.send('Server Error');	        
				} else if (result.length) {
					console.log('Found:', result);
					res.send(result);
				} else {
					res.send(result.errorMsg="No document(s) found with defined find criteria!");
					console.log('No document(s) found with defined "find" criteria!');
				}
			});
		});

	//profile photo upload
	app.post('/upload', function(req, res) {
		var image =  req.files.image;
		console.log(image);
		var fol = 'public/images/'+req.files.imageId.name+'/';
		var newImageLocation;
		
		mkdirp(fol, function(err) { 
				 newImageLocation = path.join(__dirname, fol, image.name);
				});

		fs.readFile(image.path, function(err, data) {
			fs.writeFile(newImageLocation, data, function(err) {
				res.json(200, { 
					src: 'public/images/'+req.files.imageId.name+'/'+image.name,
					size: image.size
				});
			});
		});
		var collection =db.collection('userdetails');
		 collection.update(
		     { "userId" :parseInt(req.files.imageId.name)},
		      {
		        $set: { "imagePath":  image.name}
		       
		      }, function(err, results) {
		      console.log(results);
		      
		   });

	});
});


app.use("/", express.static(__dirname + '/'));
http.createServer(app).listen(app.get('port'), function() {
	console.log("Match Maker : " + app.get('port'));
});
