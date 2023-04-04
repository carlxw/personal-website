import WorkExpCard from "../components/WorkExpCard";
import { Link } from "react-router-dom";

const jsonArr = require("../data/json/work_experience.json");

const WorkExperiences = () => {
    return (
        <div className="experiences padding flex-col flex-left" id="work-experiences">
            <h1 id="h1_title">{ `Work Experiences (${jsonArr.length})` }</h1>
            <p style={{ marginTop: "2%" }}>Nothing to hover over here</p>

            <div className="exp-content flex-col flex-left">
                { jsonArr.map((x, idx) => (<WorkExpCard data={x} key={ idx } />)) }
            </div>
        
            {/* <Link to="/personal_projects" className="navlinks" id="next_page">{ ">" }</Link>
            <Link to="/skills" className="navlinks" id="prev_page">{ "<" }</Link> */}
        </div>
    );
}

export default WorkExperiences;