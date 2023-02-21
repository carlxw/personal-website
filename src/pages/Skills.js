import SkillsCard from "../components/SkillsCard";
import { useState } from "react";
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

    // Turn button into colour if active (styles)
    const active = {
        "backgroundImage": "radial-gradient( circle farthest-corner at 10% 20%,  rgba(14,174,87,1) 0%, rgba(12,116,117,1) 90% )",
        "color": "white"
    }

    return (
        <div id="margins">
            <div className="animate__animated animate__fadeIn skills">
                <h1 id="h1_title">My Skills</h1>

                <p style={{ marginTop: "2%" }}>Hover over some of these cards!</p>

                {/* Buttons */}
                <div className="skills_buttons">
                    <button style={ office ? active : null} onClick={() => display(setOffice)}>Office</button>
                    <button style={ coding ? active : null } onClick={() => display(setCoding)}>Coding</button>
                    <button style={ devTools ? active : null } onClick={() => display(setDevTools)}>Dev Tools</button>
                    <button style={ digitalArts ? active : null } onClick={() => display(setDigitalArts)}>Digital Arts</button>
                    <button style={ languages ? active : null } onClick={() => display(setLanguages)}>Languages</button>
                </div>

                {/* Content */}
                <div className="skills_container">
                    <div className="skills_content">
                        { office && <SkillsCard id="test" data={ jsonObj.office }/> }
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