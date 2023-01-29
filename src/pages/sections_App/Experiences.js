import "./Sections.css";

import WorkExpCard from "../../components/WorkExpCard";

const jsonArr = require("../../data/json/work_experience.json")

const Experiences = () => {
    return (
        <div className="experiences" id="experiences">
            <h1>Experiences</h1>
            <p>This is a visual tree that gives a good idea of my work experience</p>
            <WorkExpCard data={ jsonArr } />
        </div>
    );
}

export default Experiences;