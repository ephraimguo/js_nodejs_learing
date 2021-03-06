var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session')({
  secret: "encrypt",
  cookie: {maxAge: 60000*5}
});
var iosession = require('express-socket.io-session')(session);
var index = require('./routes/index');
var users = require('./routes/users');

var app = express();//originally exist in express

var server = require('http').Server(app);
var io = require('socket.io')(server);
server.listen(3000);

const sockets = [];
let firstSocket;

io.use(iosession);
io.on("connection", function(socket){

  socket.on('req', function(data, cb){
    console.log('request received');
    cb('this is the socket response from backend'); // response
  });

  socket.on("speak", data=>{
    console.log(data);
    const num = ++socket.handshake.session.num;
    socket.handshake.session.save();
    io.emit('newspeak', 'num= '+num ,data +" (time:"+ new Date()+")");
  });
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session);
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// module.exports = app;
