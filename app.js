const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const Handlebars = require('handlebars');
const exphbs = require('express-handlebars');
const passport = require('passport');
const CookieParser = require('cookie-parser');
const session = require('express-session');

//Load User
require('./models/User');

//Passport Config
require('./config/passport')(passport);

//Load Routes
const auth = require('./routes/auth');
const index = require('./routes/index');
const stories = require('./routes/stories');

//Load keys
const keys = require('./config/keys')

//Map Global Promises
mongoose.Promise = global.Promise

//Mongoose Connect
mongoose.connect(keys.mongoURI, {
 useNewUrlParser: true,
 useUnifiedTopology: true
})
  .then(() => console.log("Mongoose Connected"))
  .catch(err => console.log(err));

const app = express();

// Import function exported by newly installed node modules.
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access');


//Handlebars Middleware
app.engine('handlebars', exphbs({
  defaultLayout: 'main',
   handlebars: allowInsecurePrototypeAccess(Handlebars)
}));
app.set("view engine", "handlebars");

app.use(CookieParser());
app.use(session({
  secret: "secret",
  resave: false,
  saveUninitialized: false
}));

//Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

//Set Global Vars
app.use((req, res, next) => {
  res.locals.user = req.user || null;
  next();
});

//Set Static Folder
app.use(express.static(path.join(__dirname, "public")));

//Use Routes
app.use('/auth', auth);
app.use('/', index);
app.use('/stories', stories);


const port = process.env.PORT || 3000;

app.listen(port, function(){
  console.log("Server started on port 3000");
});
