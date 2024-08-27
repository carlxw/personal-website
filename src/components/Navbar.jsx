import { Link } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";

const Navbar = () => {
    const active = { "borderBottom": "2px white solid" }
    const url = useLocation();
    const [home, setHome] = useState(false);
    const [proj, setProj] = useState(false);
    const navigationPages = useMemo(() => [setHome, setProj], []);

    // Detect when the user changes URL
    useEffect(() => {
        navigationPages.forEach(x => x(false));
        if (url.pathname === "/projects_hub") {
            setProj(true);
        } else {
            setHome(true);
        }
    }, [url, navigationPages]);

    return (
        <nav className="navbar flex-row flex-center">
            <h1 id="my-name">Carl Wang</h1>
            <div className="link-pages">
                <Link className="hover_increase_small" style={ home ? active : {} } to="/">Home</Link>
                <Link className="hover_increase_small" style={ proj ? active : {} } to="/projects_hub">Personal Projects</Link>
            </div>
        </nav>
    );
}

export default Navbar;
