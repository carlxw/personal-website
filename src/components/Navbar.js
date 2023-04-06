import { Link, /* useLocation */ } from "react-router-dom";
// import { useState, useEffect } from "react";

const Navbar = () => {
    // const [home, homeActive] = useState(false);
    // const [skills, skillsActive] = useState(false);
    // const [workexp, workexpActive] = useState(false);
    // const [proj, projActive] = useState(false);
    // const [contact, contactActive] = useState(false);

    // // Ensures that the correct CSS is being applied on first render
    // const rerender_link_change = useLocation();
    // useEffect(() => {
    //     switch (window.location.pathname) {
    //         case "/":
    //             update(homeActive);
    //             break;
    //         case "/skills":
    //             update(skillsActive);
    //             break;
    //         case "/work_experiences":
    //             update(workexpActive);
    //             break;
    //         case "/personal_projects":
    //             update(projActive);
    //             break;
    //         case "/contact":
    //             update(contactActive);
    //             break;
    //         default: break;
    //     }
    // }, [rerender_link_change]); // useLocation() causes this to run whenever URL changes
    
    // // Highlights navbar link if active
    // const update = (func) => {
    //     [homeActive, skillsActive, workexpActive, projActive, contactActive].forEach((x) => {
    //         if (x === func) x(true);
    //         else x(false);
    //     });
    // }

    // // CSS Styling
    // const active = {
    //     "backgroundColor": "white",
    //     "color": "black",
    //     "borderRadius": "15px",
    //     "border": "none"
    // }  

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
