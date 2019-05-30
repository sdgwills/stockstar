require('dotenv').config();
const express = require('express');
const massive = require('massive');
const session = require('express-session');
const ctrl = require('./controller');
const app = express();
const { CONNECTION_STRING, SERVER_PORT, SESSION_SECRET } = process.env;
const path = require('path'); // Usually moved to the start of file

app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, '../build/index.html'));
});
app.use(express.json());
app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 365
  }
}));
app.use( express.static( `${__dirname}/../build` ) );

app.get('/api/watchlist/:user_id', ctrl.readWatchlist);
app.get('/api/stocks', ctrl.readStocks);
app.post('/api/user', ctrl.createUser);
app.post('/api/stock', ctrl.createStock);
app.put('/api/update/', ctrl.updateWatchlist);
app.delete('/api/delete/:id', ctrl.delete);

massive(CONNECTION_STRING).then(dbInstance => {
  app.set('db', dbInstance);
  console.log('db set');
  app.listen(SERVER_PORT, () => {
    console.log(`Listening on port ${SERVER_PORT}`);
  })
});
