import axios from "axios";

class CryptoAPI {
    #baseURL = "http:localhost:4000"
    instance
    constructor() {
        this.instance = axios.create({
            baseURL: this.#baseURL,
        });

    }

    getAllCrypto = async () => {
        try {
            const { data } = await this.instance.get(`/marketsummary`)
            if (data.success)
                return data.result
            else return []
        }
        catch {
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