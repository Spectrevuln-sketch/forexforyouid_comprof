
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session');
// Redis
const RedisStore = require('connect-redis')(session);
var redis = require('redis');
var config = require('./config');

var bodyParser = require('body-parser');
var flash = require('connect-flash');
const passport = require('passport');
const db = require('./config/db');

var indexRouter = require('./routes/index');

var app = express();

//============================ REDIS CONFIG ===============================
const redisClient = redis.createClient(config.redis.options);
redisClient.on('ready', () => {
  console.log('Successfully connected to Redis.')
});
config.redis.client = redisClient;
//============================ END REDIS CONFIG ===============================
// db mysql connection
db.authenticate().then(() =>
  console.log("Database Connected")
);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


// setup body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// setup session express-se//ssion config
app.use(
  session({
    store: new RedisStore({ client: config.redis.client }),
    secret: 'forex for you',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: true }
  })
)
// setup flash connection-flash config
app.use(flash());



// setup passport js config
app.use(passport.initialize());
app.use(passport.session());








app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
