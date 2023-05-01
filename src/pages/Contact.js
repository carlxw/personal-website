import { MdEmail } from "react-icons/md";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Contact = () => {
    // Fix <a> not opening immediately
    const openURL = (url) => {
        const tab = window.open(url, "_blank", "noopener, noreferrer");
        if (tab) tab.opener = null;
    }

    return (
        <div className="contact flex-col flex-center padding" id="contact">
            <h1 id="contact">Contact Me!</h1>

            <div className="flex-col flex-center padding">
                <p>Thanks for checking out my website! If you want to connect, feel free to use any of the options below!</p>

                <div className="contact-links flex-row">
                    <div onClick={() => openURL("https://www.linkedin.com/in/carlxwang/")}className="contact-btn flex-row">
                        <a >LinkedIn</a> <AiFillLinkedin className="icon" />
                    </div>

                    <div onClick={() => openURL("https://github.com/carlxw")} className="contact-btn flex-row">
                        <a>GitHub</a><AiFillGithub className="icon" />
                    </div>

                    <div onClick={() => openURL("mailto:cx2wang@uwaterloo.ca")} className="contact-btn flex-row">
                        <a>Email</a><MdEmail className="icon"/>
                    </div>
                </div>

                <p id="disclaimer">I do not own at least 70% of the images used on this website. Soooooo I envoke Copyright Disclaimer under section 107 of the Copyright Act of 1976.<br />Email me if you feel some empowerment motivated by copyrightnanigans.</p>
            </div>
        </div>
    );

    // Add resume download?
}

export default Contact;