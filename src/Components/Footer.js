import { IoIosArrowUp } from 'react-icons/io'
const Footer = () => {

    const scroll = () => {
        window.scrollTo(0, 0)
    }

    return (
        <footer className="container">

            <div className="logo" onClick={() => scroll()}>Crypto Market</div>
            <button onClick={() => scroll()}>Back to top  <IoIosArrowUp /></button>
        </footer>
    );
}

export default Footer;
