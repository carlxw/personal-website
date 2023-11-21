import { SiGithub, SiGmail, SiLinkedin, SiYoutube } from "react-icons/si";
import Copyright from "./Copyright";
import { useState } from "react";

const Footer = () => {
    const [toggleF, setToggleF] = useState(true);
    const [showCopyright, toggleCopyright] = useState(false);

    const toggleFont = (enable) => {
        document.querySelector(":root").style.setProperty("--font-family", enable ? "Open Sans" : "Consolas");
        setToggleF(enable); // Trigger the re-render
    }

    return (
        <>
            <div className="footer flex-row">
                <p 
                    className="copyright_icon"
                    onClick={() => {
                        toggleCopyright(!showCopyright);

                        // Scroll to bottom of page
                        setTimeout(() => {
                            document.body.scrollTop = document.body.scrollHeight;
                            document.documentElement.scrollTop = document.documentElement.scrollHeight;
                        }, 50);
                    }}
                >©</p>

                <div className="footer_socials flex-row">
                    <a className="hover_increase" rel="noreferrer" href="https://linkedin.ca/in/carlxwang" target="_blank">
                        <SiLinkedin className="icon" size={25} />
                    </a>

                    <a className="hover_increase" rel="noreferrer" href="mailto: cx2wang@uwaterloo.ca" target="_blank">
                        <SiGmail className="icon" size={25} />
                    </a>

                    <a className="hover_increase" rel="noreferrer" href="https://www.github.com/carlxw" target="_blank">
                        <SiGithub className="icon" size={25} />
                    </a>

                    <a className="hover_increase" rel="noreferrer" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUYbmV2ZXIgZ29ubmEgZ2l2ZSB5b3UgdXAg" target="_blank">
                        <SiYoutube className="icon" size={25} />
                    </a>
                </div>

                <p 
                    className="toggle_icon"
                    style={{ fontFamily: "consolas", fontSize: "22px" }}
                    onClick={() => {
                        toggleFont(!toggleF);
                    }}
                >!;()</p>
            </div>
            { showCopyright && <Copyright /> }
        </>
    );
}

export default Footer;