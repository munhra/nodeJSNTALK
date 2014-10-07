var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');
var methodOverride = require('method-override');
var app = express();

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

app.listen(4000, function() {
    console.log("Application on the air");
});
