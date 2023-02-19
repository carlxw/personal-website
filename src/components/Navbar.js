import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1 id="nav_name">Carl Wang</h1>
            <div className="link_pages">
                <Link to="/">Home</Link>
                <Link to="/skills">Skills</Link>
                <Link to="/work_experiences">Work Experiences</Link>
                <Link to="/personal_projects">Personal Projects</Link>
                <Link to="/contact">Contact/Socials</Link>
            </div>
            <div className="cls" />
        </nav>
    );
}

export default Navbar;
