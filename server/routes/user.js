
/*
 * GET users listing.
 */

 exports.list = function(req, res){
  res.send("respond with a resource");
};


// var userList1 = [{"name":"jef","hasCar":1}, 
// 				{"name":"mike","hasCar":0}];

// var userList = [{ name:"Marc", cars:[{name:"Dacia" , places: ["Normal","Normal","Normal","Unconfortable","Unconvenient"]}]},
// 				{ name:"Jef", cars:[{name:"Partener" , places: ["Normal","Normal","Normal","Unconfortable","Unconvenient"]}]},
// 				{ name:"Mike", cars:[]}
// 				];

// var pub = function(){};

// pub.prototype.list = function(req, res){
//   res.send("respond with a resource");
// };

// //exports.user = {};

// pub.prototype.getUsers = function(db, app){
// 	if (app.get("isStubbed") === true) {
// 		return function(req, res){
// 			res.json(userList);
// 		};
// 	}else{

// 		return function(req, res){
// 			var collection = db.get('usercollection');
// 			collection.find({},{}, function(e, docs){
// 				res.json(docs);
// 			});	
// 		};
// 	};

// };

// return pub;