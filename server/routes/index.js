
/*
 * GET home page.
 */
/*
var user = require('./user');

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.getUsers = function(db,app){
	user.getUsers(db,app);
};*/

var isStubbed = false;
var userList1 = [{"name":"jef","hasCar":1}, 
				{"name":"mike","hasCar":0}];

var userList = [{ name:"Marc", cars:[{name:"Dacia" , places: ["Normal","Normal","Normal","Unconfortable","Unconvenient"]}]},
				{ name:"Jef", cars:[{name:"Partener" , places: ["Normal","Normal","Normal","Unconfortable","Unconvenient"]}]},
				{ name:"Mike", cars:[]},
				{ name:"Nelly", cars:[]},
				];

exports.index = function(req, res){
  //res.render('index', { title: 'Express' });
  res.render('index.html');
};

exports.userlist = function(db){

	if (isStubbed === true) {
		return function(req, res){
			res.json(userList);
		};
	}else{

		return function(req, res){
			var collection = db.get('miam');
			//console.log(db);
			collection.find({},{}, function(e, docs){
				//console.log(docs);
				res.json(docs);
			});	
		};
	};
};