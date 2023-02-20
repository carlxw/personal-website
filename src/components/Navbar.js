import { Link, useLocation } from "react-router-dom";
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
                console.log(2);
                break;
            case "/skills":
                update(skillsActive);
                console.log(3);
                break;
            case "/work_experiences":
                update(workexpActive);
                console.log(4);
                break;
            case "/personal_projects":
                update(projActive);
                console.log(5);
                break;
            case "/contact":
                update(contactActive);
                console.log(6);
                break;
            default: break;
        }
    }, [useLocation()]);
    
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
                <Link style={ home ? active : null } to="/">Home</Link>
                <Link style={ skills ? active : null } to="/skills">Skills</Link>
                <Link style={ workexp ? active : null } to="/work_experiences">Work Experiences</Link>
                <Link style={ proj ? active : null } to="/personal_projects">Personal Projects</Link>
                <Link style={ contact ? active : null } to="/contact">Contact/Socials</Link>
            </div>
            <div className="cls" />
        </nav>
    );
}

export default Navbar;
