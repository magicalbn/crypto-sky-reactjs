
//Components
import { useState } from 'react'
import Home from '../Pages/Home'
import Crypto from '../Pages/Crypto'
import Footer from './Footer'
import Navbar from './Navbar'
import SearchContext from './SearchBar/SearchContext'

const Layout = () => {

    const [searchParam, setsearchParam] = useState('')

    return <SearchContext.Provider
        value={{
            searchValue: searchParam,
            setSearchFunction: setsearchParam
        }}>

        <Navbar />
        {searchParam.trim().length<=0?<Home />:<Crypto cryptoQuery={searchParam}/>} 
        <Footer />
    </SearchContext.Provider>

}

export default Layout