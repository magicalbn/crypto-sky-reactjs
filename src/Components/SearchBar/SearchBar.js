import { useState, useContext } from 'react';
//icons
import { IoIosSearch } from 'react-icons/io';
import SearchContext from './SearchContext';


const Searchbar = ({ placeholder }) => {
    const [searchValue, setsearchValue] = useState('')
    const context = useContext(SearchContext)
    


    const onSearch = (e) => {
        e.preventDefault()
        if (searchValue.trim().length >= 1)
            context.setSearchFunction(searchValue)
        
    }
    return (
        <form className="search-bar" onSubmit={onSearch}>
            <input type='search' value={searchValue} placeholder={placeholder} onChange={(e) => setsearchValue(e.target.value)}></input>
            <button type='submit'><IoIosSearch /></button>
        </form>
    )
}

export default Searchbar;