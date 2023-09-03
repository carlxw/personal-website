import { SiGithub, SiGmail, SiLinkedin, SiYoutube } from "react-icons/si";
// import ToggleSwitch from "./ToggleSwitch";
import { Tooltip } from "react-tooltip";

const Footer = () => {
    // const toggleFont = (enable) => {
    //     document.querySelector(":root").style.setProperty("--font-family", enable ? "Open Sans" : "Consolas");
    // }

    return (
        <>
            <div className="flex-row">
                <div className="footer_logo">
                    <p 
                        style={{fontSize: "24px"}}
                        data-tooltip-id="copyright_msg"
                        data-tooltip-content="All mediae used and their modifications are under Creative Commons attributions, fair use/dealing, or authentically created by me."
                    >© <Tooltip id="copyright_msg" noArrow="True" /></p>
                    
                </div>

                <div className="footer_socials flex-row">
                    <a id="x" rel="noreferrer" href="https://linkedin.ca/in/carlxwang" target="_blank">
                        <SiLinkedin className="icon" size={25} />
                    </a>

                    <a id="x" rel="noreferrer" href="mailto: cx2wang@uwaterloo.ca" target="_blank">
                        <SiGmail className="icon" size={25} />
                    </a>

                    <a id="x" rel="noreferrer" href="https://www.github.com/carlxw" target="_blank">
                        <SiGithub className="icon" size={25} />
                    </a>

                    <a id="x" rel="noreferrer" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUYbmV2ZXIgZ29ubmEgZ2l2ZSB5b3UgdXAg" target="_blank">
                        <SiYoutube className="icon" size={25} />
                    </a>
                </div>

                <div className="footer_toggle flex-row">
                    <p style={{ fontFamily: "Open Sans", fontSize: "22px" }}>Aa</p>
                    {/* <ToggleSwitch func={ toggleFont }/> */}
                    <p style={{ fontFamily: "consolas", fontSize: "23px" }}>!Aa</p>
                </div>
            </div>
        </>
    );
}

export default Footer;