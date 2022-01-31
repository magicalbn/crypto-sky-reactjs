import { useState } from 'react';
//icons
import { IoIosSearch } from 'react-icons/io';


const Searchbar = ({ placeholder }) => {
    const [searchValue, setsearchValue] = useState('')
    
    const onSearch = (e) => {
        e.preventDefault()
        if (searchValue.trim().length < 1)
            return
        else
            console.log(searchValue)
    }
    return (
        <form className="search-bar" onSubmit={onSearch}>
            <input type='search' value={searchValue} placeholder={placeholder} onChange={(e) => setsearchValue(e.target.value)}></input>
            <button type='submit'><IoIosSearch /></button>
        </form>
    )
}

export default Searchbar;