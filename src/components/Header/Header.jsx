import Logo from "../../assets/logo.png";
import "./Header.css"

const Header = () => {
    return (
        <div className="header">
            <img src={Logo} />
            <h1>HTTP Vintage</h1>
        </div>
    )
}

export default Header;