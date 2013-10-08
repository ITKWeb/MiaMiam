
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

exports.adduser = function(db) {
    return function(req, res) {

        // Get our form values. These rely on the "name" attributes
		//console.log(req.body.username);        
        var userName = req.body.Name;
        var userCars = req.body.Cars;

        console.log(userName);
        console.log(userCars);

        // Set our collection
        var collection = db.get('miam');

        // // Submit to the DB
        collection.insert({
            "Name" : userName,
            "Cars" : userCars
        }, function (err, doc) {
            if (err) {
                // If it failed, return error
                res.send("There was a problem adding the information to the database.");
            }
            else {
            	console.log("postworked...")
                // If it worked, forward to success page
                //res.redirect("userlist");
                // And set the header so the address bar doesn't still say /adduser
                //res.location("userlist");
            }
        });

    }
}