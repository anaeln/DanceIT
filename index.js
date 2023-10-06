require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('node:path');
const layoutPage = path.join(__dirname, './app/views');
const mongoose = require('mongoose');
const session = require('express-session');
const router = require(path.join(__dirname, './config/index.js'));

const PORT = process.env.PORT || 8089;
app.use(
  session({
    secret: 'privatePage',
    saveUninitialized: false,
    resave: false,
  }),
);
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(express.static('/app/public'));
app.set('views', layoutPage);

app.use('/', router);
app.use((req, res, next) => {
  res.status(404).send('404');
});

const runServer = async () => {
  try {
    mongoose.connect(process.env.DB_CONNECTION_STRING, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    app.listen(PORT, () => console.log('server start in port ' + PORT));
  } catch (error) {
    console.log(error);
  }
};
runServer();
