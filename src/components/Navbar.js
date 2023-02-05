import "./Navbar.css";

/* TODO
    -> Create an icon
    -> Figma mockup
*/
const Navbar = () => {
    return (
        <nav className="navbar">
            <h1 id="navbar_name">Carl Wang</h1>
            <div className="link_pages">
                <a href="/#">Home</a>
                <a href="/#skills">Skills</a>
                <a href="/#experiences">Experiences</a>
                <a href="/#personal_projects">Personal Projects</a>
                <a href="/#contact">Contact/Socials</a>
            </div>
            <div className="cls" />
        </nav>
    );
}

export default Navbar;
