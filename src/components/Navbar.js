import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
    const [home, homeActive] = useState(false);
    const [skills, skillsActive] = useState(false);
    const [workexp, workexpActive] = useState(false);
    const [proj, projActive] = useState(false);
    const [contact, contactActive] = useState(false);

    // Ensures that the correct CSS is being applied on first render
    useEffect(() => {
        switch (window.location.pathname) {
            case "/":
                update(homeActive);
                break;
            case "/skills":
                update(skillsActive);
                break;
            case "/work_experience":
                update(workexpActive);
                break;
            case "/personal_projects":
                update(projActive);
                break;
            case "/contact":
                update(contactActive);
                break;
            default: break;
        }
    }, []);
    
    // Highlights navbar link if active
    const update = (func) => {
        [homeActive, skillsActive, workexpActive, projActive, contactActive].forEach((x) => {
            if (x === func) x(true);
            else x(false);
        });
    }

    // CSS Styling
    const active = {
        "backgroundColor": "white",
        "color": "black",
        "borderRadius": "15px",
        "border": "none"
    }  

    return (
        <nav className="navbar">
            <h1 id="nav_name">Carl Wang</h1>
            <div className="link_pages">
                <Link style={ home ? active : null } onClick={ () => update(homeActive) } to="/">Home</Link>
                <Link style={ skills ? active : null } onClick={ () => update(skillsActive) } to="/skills">Skills</Link>
                <Link style={ workexp ? active : null } onClick={ () => update(workexpActive) } to="/work_experiences">Work Experiences</Link>
                <Link style={ proj ? active : null } onClick={ () => update(projActive) } to="/personal_projects">Personal Projects</Link>
                <Link style={ contact ? active : null } onClick={ () => update(contactActive) } to="/contact">Contact/Socials</Link>
            </div>
            <div className="cls" />
        </nav>
    );
}

export default Navbar;
