const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const sequelize = require('./config/connection');

require('dotenv').config();

const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
	secret: 'Super secret secret',
	cookie: {},
	resave: false,
	saveUninitialized: true,
	store: new SequelizeStore({
		db: sequelize
	})
};

const app = express();
const PORT = process.env.PORT || 3001;

app.use(session(sess));

const hbs = exphbs.create({});

// set up Handlebars.js as your app's template engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// this is telling our app to look at the public directory for all of our js files
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers'));



app.use(session(sess));

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
	app.listen(PORT, () =>
		console.log(`Now listening on http://localhost:${PORT} !`)
	);
});
