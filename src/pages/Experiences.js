import WorkExpCard from "../components/WorkExpCard";
import { Link } from "react-router-dom";

const jsonArr = require("../data/json/work_experience.json")

const Experiences = () => {
    return (
        <div id="margins">
            <div className="experiences" id="experiences">
                <h1 id="h1_title">Experiences</h1>
                <p>This is a visual tree that gives a good idea of my work experience</p>

                <div className="experiences_content">
                    <WorkExpCard data={ jsonArr } />
                </div>
            
                <Link to="/personal_projects" className="navlinks" id="next_page">Personal Projects {">"}</Link>
                <Link to="/skills" className="navlinks" id="prev_page">{"<"} Skills</Link>
                <div className="cls" />
            </div>
        </div>
    );
}

export default Experiences;