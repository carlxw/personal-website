import ProjCard from "../components/ProjCard";
// import { Link } from "react-router-dom";

const jsonArr = require("../data/json/personal_projects.json");

const PersonalProjects = () => {
    return (
        <div className="personal-projects padding flex-col extend" id="personal-projects">
            <h1 className="h1-gap bold">{ `Personal Projects (${jsonArr.length})` }</h1>

            <div className="proj-content flex-col">
                { jsonArr.map((x, idx) => <ProjCard data={ x } key={ idx } />) }
            </div>

            {/* <Link to="/contact" className="navlinks" id="next_page">{ ">" }</Link>
            <Link to="/work_experiences" className="navlinks" id="prev_page">{ "<" }</Link> */}
        </div>
    );
}

export default PersonalProjects;