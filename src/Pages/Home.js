import { useEffect } from "react";
import axios from "axios";
import CryptoAPI from "../services/CryptoAPI";

function Home() {

  useEffect(() => {
    // const service = new CryptoAPI()
    // service.getAllCrypto()
    //   .then((data)=>{
    //     console.log(data)
    //   })

    axios.get('http://localhost:4000/crypto/marketsummary').then(({data})=>console.log(data))
    
    
  }, [])
  return (
    <div className="App">
      Crypto Market Home
    </div>
  );
}

export default Home;
