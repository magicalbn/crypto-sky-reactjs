const axios = require('axios')

const URL = 'https://api.bittrex.com/api/v1.1/public'


const getMarketSummries = async (req, res, next) => {

    try {
        const { data } = await axios.get(`${URL}/getmarketsummaries`)
        if (data.success)
            return res.status(200).json(data.result)
        else return res.json([])
    }
    catch {
        return res.status(501).json({error: 'Some error Ocurred'})
    }

   
};

const getCryptoDetails = async (req, res, next) => {

    const query = req.params.query
    

    try {
        const { data } = await axios.get(`${URL}/getmarketsummary?market=${query}`)
        if (data.success)
            return res.json(data.result[0])
        else return res.json({})
    }
    catch {
        return res.status(501).json({error: 'Some error Ocurred'})
    }

   
};

module.exports = { getMarketSummries, getCryptoDetails };