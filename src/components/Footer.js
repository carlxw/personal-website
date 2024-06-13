import { SiGithub, SiGmail, SiLinkedin, SiYoutube } from "react-icons/si";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Copyright from "./Copyright";

const Footer = () => {
    const [toggleF, setToggleF] = useState(true);
    const [showCopyright, toggleCopyright] = useState(false);
    const url = useLocation();

    // Whenever the URL changes, auto-hide the copyright in the footer
    useEffect(() => {
        toggleCopyright(false);
    }, [url]);

    const toggleFont = (enable) => {
        document.querySelector(":root").style.setProperty("--font-family", enable ? "Open Sans" : "Inconsolata");
        setToggleF(enable); // Trigger the re-render

        // Change the homepage h1 text to prevent overflow
        const homepageh1 = document.querySelector("#homepage_h1");
        const projArrow = document.querySelector("#up_arrow");
        if (!enable) {
            if (homepageh1 && projArrow) {
                homepageh1.style.fontSize = "4.5vw";
                projArrow.style.right = "128px";
            } 
        } else {
            if (homepageh1 && projArrow) {
                homepageh1.style.fontSize = "96px";
                projArrow.style.right = "114px";
            } 
        }
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
                            window.scrollTo( {
                                top: document.body.scrollHeight,
                                behavior: "smooth"
                            });

                            // Instant scroll behaviour
                            // document.body.scrollTop = document.body.scrollHeight;
                            // document.documentElement.scrollTop = document.documentElement.scrollHeight;
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
                        style={{ fontFamily: "Inconsolata", fontSize: "22px" }}
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