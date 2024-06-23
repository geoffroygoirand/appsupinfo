var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');


const connectDB = require('./models/config');
const Entreprise = require('./models/entreprise');
const Salarié = require('./models/salarie');

var app = express();

connectDB();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.post('/register', (req, res) => {
  const { username, email, password, confirm_password } = req.body;

  // Validation de base des champs
  if (!username || !email || !password || !confirm_password) {
    return res.status(400).send('All fields are required');
  }

  if (password !== confirm_password) {
    return res.status(400).send('Passwords do not match');
  }

  // TODO: Ajouter la logique pour sauvegarder les données utilisateur
  // Par exemple, vous pouvez utiliser une base de données pour stocker les informations de l'utilisateur
  // db.saveUser({ username, email, password });

  res.send('Registration successful');
});

app.get('/dashboard', function(req, res, next) {
  res.render('dashboard', { title: 'Dashboard' });
});

// Exemple de données de prix
const prices = [
    { plan: 'Basic', amount: '10', currency: 'USD', description: 'Basic plan description.' },
    { plan: 'Pro', amount: '20', currency: 'USD', description: 'Pro plan description.' },
    { plan: 'Premium', amount: '30', currency: 'USD', description: 'Premium plan description.' }
];

app.get('/pricing', (req, res) => {
    res.render('pricing', { prices: prices });
});



app.post('/register', (req, res) => {
  const { username, email, password, confirm_password } = req.body;

  // Basic field validation
  if (!username || !email || !password || !confirm_password) {
    return res.status(400).send('All fields are required');
  }

  if (password !== confirm_password) {
    return res.status(400).send('Passwords do not match');
  }

  // TODO: Save user data logic here

  res.send('Registration successful');
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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

module.exports = app;
