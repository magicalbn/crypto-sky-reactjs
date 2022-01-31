//import { useRouter } from "next/router";
//component
import { createContext } from "react";
import Searchbar from "./SearchBar/SearchBar";

const Navbar = () => {
 
  return (
    <header>
      <div className="navbar container">
        <div className="logo"><img src="/svg/bitcoin-cash-bch.svg"></img><h3>Crypto Market</h3></div>
        <Searchbar placeholder={'Search for Crypto . . .'} /> 
      </div>
    </header>
  );
}

export default Navbar;
