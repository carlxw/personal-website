import { Link } from "react-router-dom";

const Contact = () => {
    return (
        <div id="margins">
            <div className="contact" id="contact">
                <h1 id="contact">Contact Me!</h1>
                <p>Thanks for checking out my website! If you want to connect, feel free to use any of the options below!</p>

                <div className="contact_links">
                    <a href="https://www.linkedin.com/in/carlxwang/" target="_blank" rel="noreferrer">LinkedIn</a> 
                    <a href="https://github.com/carlxw" target="_blank" rel="noreferrer">GitHub</a>
                    <a href="mailto:cx2wang@uwaterloo.ca" target="_blank" rel="noreferrer">Email</a>
                </div>

                <p id="disclaimer">I do not own at least 70% of the images used on this website. Soooooo I envoke Copyright Disclaimer under section 107 of the Copyright Act of 1976. Email me if you feel some empowerment motivated by copyrightnanigans.</p>

                <Link to="/personal_projects" className="navlinks" id="prev_page">{ "<" }</Link>
            </div>

            <div className="block" />
        </div>
    );

    // Resume
}

export default Contact;