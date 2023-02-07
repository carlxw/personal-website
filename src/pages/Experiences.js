import WorkExpCard from "../components/WorkExpCard";
import { Link } from "react-router-dom";

const jsonArr = require("../data/json/work_experience.json")

const Experiences = () => {
    return (
        <div className="experiences" id="experiences">
            <h1>Experiences -------------------------</h1>
            <p>This is a visual tree that gives a good idea of my work experience</p>
            <WorkExpCard data={ jsonArr } />

            <Link to="/personal_projects" className="next_page">Personal Projects -{">"}</Link>
            <Link to="/skills" className="prev_page">{"<-"} Skills</Link>
            <div className="cls" />
        </div>
    );
}

export default Experiences;