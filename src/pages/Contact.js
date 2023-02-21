import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Contact = () => {
    return (
        <div id="margins">
            <div className="animate__animated animate__fadeIn contact" id="contact">
                <h1 id="contact">Contact Me!</h1>
                <p>Thanks for checking out my website! If you want to connect, feel free to use any of the options below!</p>

                <div className="contact_links">
                    <a href="https://www.linkedin.com/in/carlxwang/" target="_blank" rel="noreferrer">LinkedIn <AiFillLinkedin className="icon" /></a> 
                    <a href="https://github.com/carlxw" target="_blank" rel="noreferrer">GitHub <AiFillGithub className="icon" /></a>
                    <a href="mailto:cx2wang@uwaterloo.ca" target="_blank" rel="noreferrer">Email <MdEmail className="icon"/></a>
                </div>

                <p id="disclaimer">I do not own at least 70% of the images used on this website. Soooooo I envoke Copyright Disclaimer under section 107 of the Copyright Act of 1976. Email me if you feel some empowerment motivated by copyrightnanigans.</p>

            </div>
            <Link to="/personal_projects" className="navlinks" id="prev_page">{ "<" }</Link>

            <div className="block" />
        </div>
    );

    // Resume
}

export default Contact;