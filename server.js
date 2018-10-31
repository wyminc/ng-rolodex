const express = require('express');
const app = express();
const methodOverride = require("method-override")
const bodyParser = require('body-parser');
// const session = require('express-session');
const knex = require('./knex/knex.js');

// const cards = require('./knex/models/cards.js');
// const priorities = require('./knex/models/priorities.js');
// const statuses = require('./knex/models/statuses.js');
// const users = require('./knex/models/users.js');
const cors = require('cors');
// const RedisStore = require('connect-redis')(session);
// const passport = require('passport');

const PORT = process.env.EXPRESS_CONTAINER_PORT;

// app.use(session({
//   store: new RedisStore({url: 'redis://redis:6379', logErrors: true}),
//   secret: 'p1',
//   resave: false,
//   saveUninitialized: true
// }));
// app.use(passport.initialize());
// app.use(passport.session());

app.use(express.static("public"));
app.use(cors());
app.use(methodOverride("_method"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.engine('.hbs', exphbs({ defaultLayout: 'layout', extname: '.hbs' }));
// app.set('view engine', '.hbs');


app.get('*', (req, res) => {
  res.json('404 error, this is the last item before app.listen on the server.js file');
})

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})