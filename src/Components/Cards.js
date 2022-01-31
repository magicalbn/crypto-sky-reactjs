import { useContext } from "react";
//components
import SearchContext from "./SearchBar/SearchContext";

const Cards = ({ cryptoDetails }) => {

    const context = useContext(SearchContext)
    


    const { Ask, Created, MarketName, PrevDay, Volume } = cryptoDetails
    let createdDate = new Date(Created);
    createdDate = createdDate.toString().split(' ').slice(1, 5).join(' ')
    const netGross = ((Ask - PrevDay) / PrevDay * 100).toFixed(2)
    return (
        <div className="card">
            <div className="details-name">
                <h3 className="value">{MarketName}</h3>
                <p className="label">Created: {createdDate !== undefined ? createdDate : 'NA'}</p>
            </div>

            <div className="details-prev">
                <p className="value">{PrevDay !== undefined ? PrevDay : 'NA'}</p>
                <p className="label">Previous day</p>
            </div>
            <div className="details-current">
                <p className="value">{Ask !== undefined ? Ask : 'NA'}</p>
                <p className="label">Current (<span className={netGross < 0 ? 'gross loss' : 'gross profit'}> {netGross}%</span>)</p>
            </div>
            <div className="details-volume">
                <p className="value">{Volume !== undefined ? Volume.toFixed(2) : 'NA'}</p>
                <p className="label">Volume</p>
            </div>
            <div className="details-more">
                <button onClick={() => {context.setSearchFunction(MarketName)}}>More Details</button>
            </div>

        </div>
    )
}

export default Cards