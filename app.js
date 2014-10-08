var express = require('express');
var http = require('http');
var load = require('express-load');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');
var methodOverride = require('method-override');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

//var server = http.createServer(app).listen(app.get('port'), function(){
//  console.log('Express server listening on port ' + app.get('port'));
//});



//var server = http.createServer(app);
//var io = require('socket.io').listen(server);

// view engine setup
app.set('views', __dirname, '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname, '/public'));
app.use(cookieParser('ntalk'));
app.use(expressSession());
app.use(bodyParser.json());
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended: true}));

load('models').then('controllers').then('routes').into(app);

io.sockets.on('connection', function (client) {
	client.on('send-server', function (data) {		
		var msg = "<b>"+data.nome+":</b> "+data.msg+"<br>";
		console.log(msg);
		client.emit('send-client',msg);
		client.broadcast.emit('send-client',msg);
	});
});

app.listen(4000, function() {
    console.log("Application on the air");
});