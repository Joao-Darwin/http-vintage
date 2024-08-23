import GitHubIcon from "../../assets/github-icon.png";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="links">
                <a href="https://github.com/Joao-Darwin/http-vintage" target="_blank">
                    <img src={GitHubIcon} alt="Github icon" />
                </a>
            </div>
            <p>v0.0.1</p>
            <p>
                Developed by <a href="https://github.com/Joao-Darwin" target="_blank">João Darwin</a>
            </p>
        </footer>
    )
}

export default Footer;