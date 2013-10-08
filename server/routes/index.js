
/*
 * GET home page.
 */

var isStubbed = true;
var userList = [{"name":"jef","hasCar":1}, 
				{"name":"mike","hasCar":0}];

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.userlist = function(db){

	if (isStubbed === true) {
		return function(req, res){
			res.json(userList);
		};
	}else{

		return function(req, res){
			var collection = db.get('usercollection');
			collection.find({},{}, function(e, docs){
				res.json(docs);
			});	
		};
	};
};
