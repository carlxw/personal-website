import { SiGithub, SiGmail, SiLinkedin, SiYoutube } from "react-icons/si";
import ToggleSwitch from "./ToggleSwitch";

const Footer = () => {
    const date = new Date();

    return (
        <div className="footer flex-row">
            <div className="footer_logo">
                <p>© Carl Wang { date.getFullYear() }</p>
            </div>

            <div className="footer_socials flex-row">
                <a rel="noreferrer" href="https://linkedin.ca/in/carlxwang" target="_blank">
                    <SiLinkedin className="icon" size={25} />
                </a>

                <a rel="noreferrer" href="mailto: cx2wang@uwaterloo.ca" target="_blank">
                    <SiGmail className="icon" size={25} />
                </a>

                <a rel="noreferrer" href="https://www.github.com/carlxw" target="_blank">
                    <SiGithub className="icon" size={25} />
                </a>

                <a rel="noreferrer" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUYbmV2ZXIgZ29ubmEgZ2l2ZSB5b3UgdXAg" target="_blank">
                    <SiYoutube className="icon" size={25} />
                </a>
            </div>

            <div className="footer_toggle flex-row">
                <p>Aa</p>
                <ToggleSwitch />
                <p>!Aa</p>
            </div>
        </div>
    );
}

export default Footer;