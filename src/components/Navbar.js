import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
    // CSS Styling
    const active = {
        "borderBottom": "2px white solid"
    }  

    // Booleans
    const [home, setHome] = useState(false);
    const [exp, setExp] = useState(false);
    const [proj, setProj] = useState(false);
    const [contact, setContact] = useState(false);
    const arr = [setHome, setExp, setProj, setContact];

    // Detect the page user is on when user first loads site. Only runs once
    useEffect(() => {
        if (document.URL.includes("/#/work_experiences")) {
            setExp(true);
        } else if (document.URL.includes("/#/personal_projects")) {
            setProj(true);
        } else if (document.URL.includes("/#/contact")) {
            setContact(true); 
        } else if (document.URL.includes("/#/")) {
            setHome(true);
        }
    }, []);

    // When the page changes via Navbar
    const run = (input) => {
        // Set all variables as false
        arr.forEach(x => x(false));

        switch (input) {
            case "home":
                setHome(true);
                break;
            case "exp":
                setExp(true);
                break;
            case "proj":
                setProj(true);
                break;
            case "contact":
                setContact(true);
                break;
            default: return;
        }
    }

    return (
        <nav className="navbar flex-row flex-center">
            <h1 id="my-name">Carl Wang</h1>
            <div className="link-pages">
                <Link onClick={() => { run("home") }} style={ home ? active : {} } to="/">Home</Link>
                {/* <Link to="/skills">Skills</Link> */}
                <Link onClick={() => { run("exp") }} style={ exp ? active : {} } to="/work_experiences">Work Experiences</Link>
                <Link onClick={() => { run("proj") }} style={ proj ? active : {} } to="/personal_projects">Personal Projects</Link>
                <Link onClick={() => { run("contact") }} style={ contact ? active : {} } to="/contact">Contact/Socials</Link>
            </div>
        </nav>
    );
}

export default Navbar;
