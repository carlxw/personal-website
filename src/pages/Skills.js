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

    // All update functions to store in this array
    const funcs = [setOffice, setCoding, setDevTools, setDigitalArts, setLanguages];

    const display = (func) => {
        // Turn off all categories
        funcs.forEach((item) => {
            item(false);
        });

        // Turn on desired category
        func(true);
    }

    return (
        <div id="margins">
            <div className="skills">
                <h1 id="h1_title">My Skills</h1>

                {/* Buttons */}
                <div className="skills_buttons">
                    <button onClick={() => display(setOffice)}>Office</button>
                    <button onClick={() => display(setCoding)}>Coding</button>
                    <button onClick={() => display(setDevTools)}>Dev Tools</button>
                    <button onClick={() => display(setDigitalArts)}>Digital Arts</button>
                    <button onClick={() => display(setLanguages)}>Languages</button>
                </div>

                {/* Content */}
                <div className="skills_container">
                    <div className="skills_content">
                        { office && <SkillsCard data={ jsonObj.office }/> }
                        { coding && <SkillsCard data={ jsonObj.coding } /> }
                        { devTools && <SkillsCard data={ jsonObj.devTools } /> }
                        { digitalArts && <SkillsCard data={ jsonObj.digitalArts } /> }
                        { languages && <SkillsCard data={ jsonObj.languages } /> }
                    </div>
                </div>

                <div className="navlinks">
                    <Link to="/work_experiences" className="navlinks" id="next_page">{ ">"} </Link>
                    <Link to="/" className="navlinks" id="prev_page">{ "<" }</Link>
                    <div className="cls" />
                </div>
            </div>
            <div className="block" />
        </div>
    );
}

export default Skills;