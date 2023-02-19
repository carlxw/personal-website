import WorkExpCard from "../components/WorkExpCard";
import { Link } from "react-router-dom";

const jsonArr = require("../data/json/work_experience.json")

const WorkExperiences = () => {
    return (
        <div id="margins">
            <div className="experiences" id="work_experiences">
                <h1 id="h1_title">Work Experiences</h1>
                
                <div className="experiences_content">
                    <WorkExpCard data={ jsonArr } />
                </div>
            
                <Link to="/personal_projects" className="navlinks" id="next_page">{ ">" }</Link>
                <Link to="/skills" className="navlinks" id="prev_page">{ "<" }</Link>
                <div className="cls" />
            </div>
        </div>
    );
}

export default WorkExperiences;