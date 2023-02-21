import ProjCard from "../components/ProjCard";
import { Link } from "react-router-dom";

const jsonArr = require("../data/json/personal_projects.json");

const PersonalProjects = () => {
    return (
        <div id="margins">
            <div className="personal-projects" id="personal_projects">
                <h1 id="h1_title">{ `Personal Projects (${jsonArr.length})` }</h1>
                <p style={{ marginTop: "2%" }}>Nothing to hover on this page either (or is there?)</p>

                <div className="proj_content">
                    <ProjCard data={jsonArr} />
                </div>

                <Link to="/contact" className="navlinks" id="next_page">{ ">" }</Link>
                <Link to="/work_experiences" className="navlinks" id="prev_page">{ "<" }</Link>
                <div className="cls" />

                <div className="block" />
            </div>
        </div>
    );
}

export default PersonalProjects;