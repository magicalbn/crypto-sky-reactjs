import axios from "axios";

class CryptoAPI {
    #baseURL = "http://localhost:4000/crypto"
    instance

    constructor() {
        this.instance = axios.create({
            baseURL: this.#baseURL,
        });

    }

    getAllCrypto = async () => {
    
        try {
            const { data } = await axios.get(`http://localhost:4000/crypto/marketsummary`)
            return data
        }
        catch (e){
            console.log(e)
            return []
        }

    }


    getCryptoDetails = async (query) => {
        try {
            const { data } = await this.instance.get(`/cryptodetails/${query}`)
            if (data.success)
                return data.result[0]
            else return {}
        }
        catch {
            return {}
        }
    
    }

}

export default CryptoAPI