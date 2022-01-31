const express = require('express');
let router = express.Router();

const cryptoController = require('../controller/cryptoController');


router.get('/marketsummary', cryptoController.getMarketSummries)

router.get('/cryptodetails/:query', cryptoController.getCryptoDetails)

router.get('/cryptodetails', function (req, res) {
    res.send('Use /cryptodetails/:query to get Crypto Details');
})

router.get('*', function (req, res) {
    res.send('Use /marketsummary for all market Summary and /cryptodetails/:query for specific crypto details');
})



module.exports = router