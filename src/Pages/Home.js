import { useEffect, useState } from "react";

import CryptoAPI from "../services/CryptoAPI";
import Cards from "../Components/Cards";
import Spinner from "../Components/Spinner/Spinner"

const Home = () => {
  const [pageNumber, setpageNumber] = useState(1)
  const [isLoading, setLoading] = useState(true)
  const [marketData, setmarketData] = useState([])




  useEffect(() => {
    setLoading(true)
    const service = new CryptoAPI()
    service.getAllCrypto()
      .then((data) => {
        setLoading(false)
        setmarketData(data)
      })
      .catch = () => {
        setLoading(false)
      }

  }, [])



  const [pageStart, pageEnd] = [(pageNumber - 1) * 20, pageNumber * 20]

  const totalPages = Math.ceil(marketData.length / 20)

  const pagination = (
    <div className='pagination'>
      <p>page {pageNumber} of {totalPages}</p>
      {pageNumber != 1 && <button disabled={pageNumber < 2} onClick={() => setpageNumber(1)}>&lt;&lt;</button>}
      <button disabled={pageNumber < 2} onClick={() => setpageNumber(pageNumber - 1)}>&lt;</button>
      <button disabled={pageNumber > totalPages - 1} onClick={() => setpageNumber(pageNumber + 1)}>&gt;</button>
      <button disabled={pageNumber > totalPages - 1} onClick={() => setpageNumber(totalPages)}>&gt;&gt;</button>
    </div>
  )



  return (
    <div className='container index'>

     
      <h2>Market Summaries</h2>

      {isLoading?<Spinner></Spinner>:(
        marketData.length > 0 ? (
          <div className='crypto-table'>
  
            {pagination}
  
            <div className='crypto-list'>
              {marketData.length > 0 ? (
                <>
                  {marketData.slice(pageStart, pageEnd).map(each => {
  
                    return (
                      <Cards key={each.MarketName} cryptoDetails={each} />
                    )
                  })}
                </>
              ) : null}
            </div>
  
            {pagination}
          </div>
  
        ) : <p className='error'>Error: Some Error occured while retrieving Mart Summaries. Try again later.</p>
  
  
      )}
      
    </div>
  );
}

export default Home;
