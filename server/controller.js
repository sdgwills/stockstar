module.exports = {
  readWatchlist: (req, res) => {
    const { user_id } = req.params;

    const db = req.app.get('db');

    db.selectWatchlistTable({user_id}).then(response => {
      res.status(200).send(response);
    }).catch(err => {
      console.log('BERRORS!!', err);
    })
  },

  readStocks: (req, res) => {
    const db = req.app.get('db');

    db.selectAllStocks().then(response => {
      res.status(200).send(response);
    }).catch(err => {
      console.log('BERROR!!', err)
    })
  },

  createUser: (req, res) => {
    const { user_id } = req.body;
    
    const db = req.app.get('db');

    db.insertNewUser(user_id).then(response => {
      res.status(200).send(response);
    }).catch(err => {
      console.log('err', err);
    })
  },

  createStock: async (req, res) => {
    const { ticker } = req.body;

    const db = req.app.get('db');
    let newTicker = null

    await db.getStockIdByName(ticker).then(response => {
      newTicker = response[0].id
    }).catch(err => {
      console.log('err', err)
    })
    console.log(newTicker); 

    await db.insertIntoWatchlist(newTicker).then(response => {
      res.status(200).send(response);
    })
  },

  updateWatchlist: async (req, res) => {
    let { ticker, id } = req.body;

    console.log(req.body);
    console.log(ticker, id);

    const db = req.app.get('db');

    await db.getStockIdByName(ticker).then(response => {
      ticker = response[0].id
    }).catch(err => {
      console.log('err', err)
    })

    console.log(ticker)

    db.updateWatchlist({ticker, id}).then(response => {
      res.status(200).send(response);
    }).catch(err => {
      console.log('err', err);
    })
  },

  delete: (req, res) => {
    const { id } = req.params;

    const db = req.app.get('db');

    db.deleteStock( {id} ).then(response => {
      res.status(200).send(response);
    }).catch(err => {
      console.log('BERRORS!!', err);
    })
  },
}
