
/**
 * Module dependencies.
 */


HELLO_KITTY();
var http = require('http');
var path = require('path');

var mongo = require('mongodb');
var monk = require('monk');
//var db = monk('localhost:27017/miam');
var db = monk('192.168.1.21:27017/miam');
console.log(db);

var app = express();

//all environments
app.set('port', process.env.PORT || 3000);
//app.set('views', __dirname + '/public/views');
//app.set('view engine', 'jade');
// app.use(express.favicon());
// app.use(express.logger('dev'));
app.use(express.bodyParser());
// app.use(express.methodOverride());
// app.use(express.cookieParser('your secret here'));
//app.use(express.session());
//app.use(app.router);
app.use(express.static(path.join(__dirname, './public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);
app.get('/userlist', routes.userlist(db));
app.post('/adduser', routes.adduser(db));

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});