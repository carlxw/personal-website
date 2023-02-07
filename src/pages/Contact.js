import { Link } from "react-router-dom";

const Contact = () => {
    return (
        <div className="contact" id="contact">
            <h1 id="contact">Contact -------------------------</h1>
            <a href="https://www.linkedin.com/in/carlxwang/" target="_blank" rel="noreferrer">LinkedIn</a> 
            <br />
            <a href="https://github.com/carlxw" target="_blank" rel="noreferrer">GitHub</a>
            <br />
            <a href="mailto:someone@yoursite.com" target="_blank" rel="noreferrer">Email</a>

            <Link to="/personal_projects" className="prev_page">{"<-"} Personal Projects</Link>
            <Link to="/" className="next_page">Return to Home</Link>
            <div className="cls" />
        </div>
    );

    // LinkedIn and GitHub, Master Resume
}

export default Contact;