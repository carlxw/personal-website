import { Link, /* useLocation */ } from "react-router-dom";
// import { useState, useEffect } from "react";

const Navbar = () => {
    return (
        <nav className="navbar flex-row flex-center">
            <h1 id="my-name">Carl Wang</h1>
            <div className="link-pages">
                <Link to="/">Home</Link>
                {/* <Link to="/skills">Skills</Link> */}
                <Link to="/work_experiences">Work Experiences</Link>
                <Link to="/personal_projects">Personal Projects</Link>
                <Link to="/contact">Contact/Socials</Link>
            </div>
        </nav>
    );
}

export default Navbar;
