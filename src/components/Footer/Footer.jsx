import GithubIcon from "../../assets/github-icon.png";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="links">
                <a href="https://github.com/Joao-Darwin/http-vintage" target="_blank">
                    <img src={GithubIcon} alt="Github icon" title="Give a start <3" />
                </a>
            </div>
            <p>v0.0.0</p>
            <p>
                Developed by <a href="https://github.com/Joao-Darwin" target="_blank">João Darwin</a>
            </p>
        </footer>
    )
}

export default Footer;