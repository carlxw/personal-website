import ProjCard from "../components/ProjCard";
import { Link } from "react-router-dom";

const jsonArr = require("../data/json/personal_projects.json");

const PersonalProjects = () => {
    return (
        <div id="margins">
            <div className="personal-projects" id="personal_projects">
                <h1 id="h1_title">Personal Projects</h1>

                <div className="proj_content">
                    <ProjCard data={jsonArr} />
                </div>

                <Link to="/contact" className="navlinks" id="next_page">Contact/Socials {">"}</Link>
                <Link to="/work_experiences" className="navlinks" id="prev_page">{"<"} Work Experiences</Link>
                <div className="cls" />
            </div>
        </div>
    );

    // Dynamically create a list of personal projects
}

export default PersonalProjects;