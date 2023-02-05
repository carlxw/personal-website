import WorkExpCard from "../../components/WorkExpCard";

import "./css/Experiences.css";

const jsonArr = require("../../data/json/work_experience.json")

const Experiences = () => {
    return (
        <section id="experiences">
            <div className="experiences">
                <h1>Experiences</h1>
                <p>This is a visual tree that gives a good idea of my work experience</p>
                <WorkExpCard data={ jsonArr } />
            </div>
        </section>
    );
}

export default Experiences;