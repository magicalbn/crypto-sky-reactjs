const express = require('express')
const app = express()
const port = 4000

var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "http://localhost:3000");
  res.header('Access-Control-Allow-Methods', 'GET');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
};

app.use(allowCrossDomain);



var cryptoRouter = require('./router/cryptoRouter');
// ...
app.use('/crypto', cryptoRouter);



app.get('/', (req, res) => {
  res.send('API server for Crypto Calls. Use /marketsummary for all market Summary and /cryptodetails/:query for specific crypto details')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})