import ProjCard from "../components/ProjCard";
import { Link } from "react-router-dom";

const jsonArr = require("../data/json/personal_projects.json");

const PersonalProjects = () => {
    return (
        <div className="personal-projects" id="personal_projects">
            <h1>Personal Projects -------------------------</h1>
            <p>A collection of things that I made or am apart of</p>
            <ProjCard data={jsonArr} />

            <Link to="/contact" className="navlinks" id="next_page">Contact/Socials {">"}</Link>
            <Link to="/work_experience" className="navlinks" id="prev_page">{"<"} Work Experiences</Link>
            <div className="cls" />
        </div>
    );

    // Dynamically create a list of personal projects
}

export default PersonalProjects;