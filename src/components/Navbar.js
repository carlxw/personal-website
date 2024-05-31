import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
    // CSS Styling
    const active = {
        "borderBottom": "2px white solid"
    }  

    // Booleans for navigation
    const [home, setHome] = useState(false);
    const [proj, setProj] = useState(false);
    const arr = [setHome, setProj];

    // Detect the page user is on when user first loads site. Only runs once
    useEffect(() => {
        if (document.URL.includes("/#/personal_projects")) {
            setProj(true);
        } else {
            setHome(true);
        }
    }, []);

    // When the page changes via Navbar
    const switchPage = (input) => {
        // Set all variables as false
        arr.forEach(x => x(false));
        
        switch (input) {
            case "home":
                setHome(true);
                break;
            case "proj":
                setProj(true);
                break;
            default: return;
        }
    }

    return (
        <nav className="navbar flex-row flex-center">
            <h1 id="my-name">Carl Wang</h1>
            <div className="link-pages">
                <Link className="hover_increase_small" onClick={() => { switchPage("home") }} style={ home ? active : {} } to="/">Home</Link>
                <Link className="hover_increase_small" onClick={() => { switchPage("proj") }} style={ proj ? active : {} } to="/projects_hub">Personal Projects</Link>
            </div>
        </nav>
    );
}

export default Navbar;
