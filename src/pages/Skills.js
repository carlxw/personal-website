import { useState } from "react";
import SkillsCard from "../components/SkillsCard";
import { Link } from "react-router-dom";

const jsonObj = require("../data/json/skills.json");

const Skills = () => {
    const [office, setOffice] = useState(true);
    const [coding, setCoding] = useState(false);
    const [devTools, setDevTools] = useState(false);
    const [digitalArts, setDigitalArts] = useState(false);
    const [languages, setLanguages] = useState(false);

    const funcs = [setOffice, setCoding, setDevTools, setDigitalArts, setLanguages]

    const display = (func) => {
        // Turn off all categories
        funcs.forEach((item) => {
            item(false);
        });

        // Turn on desired category
        func(true);
    }

    return (
        <div className="skills" id="skills">
            <h1>Skills -------------------------</h1>

            {/* Buttons */}
            <button onClick={() => display(setOffice)}>Office</button>
            <button onClick={() => display(setCoding)}>Coding</button>
            <button onClick={() => display(setDevTools)}>Dev Tools</button>
            <button onClick={() => display(setDigitalArts)}>Digital Arts</button>
            <button onClick={() => display(setLanguages)}>Languages</button>

            {/* Content */}
            { office && <SkillsCard data={ jsonObj.office }/> }
            { coding && <SkillsCard data={ jsonObj.coding } /> }
            { devTools && <SkillsCard data={ jsonObj.devTools } /> }
            { digitalArts && <SkillsCard data={ jsonObj.digitalArts } /> }
            { languages && <SkillsCard data={ jsonObj.languages } /> }

            <Link to="/experiences" className="next_page">Experiences -{">"}</Link>
            <Link to="/" className="prev_page">{"<-"} Home</Link>
            <div className="cls" />
        </div>
    );
}

// Create a table that takes data from a JSON
// Make buttons work

export default Skills;