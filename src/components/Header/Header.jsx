import Logo from "../../assets/logo.png";
import "./Header.css"

const Header = () => {
    return (
        <header className="header">
            <img src={Logo} />
            <h1>HTTP Vintage</h1>
        </header>
    )
}

export default Header;