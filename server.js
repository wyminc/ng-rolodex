const express = require('express');
const app = express();
const methodOverride = require("method-override")
const bodyParser = require('body-parser');
// const session = require('express-session');
const knex = require('./knex/knex.js');

const contacts = require('./knex/models/contacts.js');
const users = require('./knex/models/users.js');
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

app.get("/all", (req, res) => {
  contacts
    .forge()
    .orderBy('name', 'asc')
    .fetchAll({ withRelated: ["created_by"] })
    .then(results => {
      res.json(results);
    })
    .catch(err => {
      console.log(err);
      res.json(err);
    })
})

app.post("/search/:name", (req, res) => {
  const { name } = req.params
  const info = name.toLowerCase();

  contacts
    .query(function (qb) {
      qb.whereRaw(`LOWER(name) LIKE ?`, [`%${info}%`])
    })
    .fetchAll({ withRelated: ["created_by"] })
    .then(results => {
      res.json(results);
    })
    .catch(err => {
      console.log(err);
      res.json(err);
    })
})

app.get('*', (req, res) => {
  res.json('404 error, this is the last item before app.listen on the server.js file');
})

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})