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
            const { data } = await this.instance.get(`/marketsummary`)
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
            return data
        }
        catch (e){
            console.log(e)
            return []
        }
    
    }

}

export default CryptoAPI