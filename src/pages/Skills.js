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
        <div className="skills flex-col flex-center padding">
            <h1 id="skills-title">My Skills</h1>

            <p>Hover over some of these cards!</p>

            <div className="flex-col flex-center">
                {/* Buttons */}
                <div className="skills-buttons flex-row">
                    <button style={ office ? active : null} onClick={() => display(setOffice)}>Office</button>
                    <button style={ coding ? active : null } onClick={() => display(setCoding)}>Coding</button>
                    <button style={ devTools ? active : null } onClick={() => display(setDevTools)}>Dev Tools</button>
                    <button style={ digitalArts ? active : null } onClick={() => display(setDigitalArts)}>Digital Arts</button>
                    <button style={ languages ? active : null } onClick={() => display(setLanguages)}>Languages</button>
                </div>

                {/* Content */}
                <div className="skills-content">
                    { office && jsonObj.office.map((x, idx) => <SkillsCard data={ x } key={ idx } />) }
                    { coding && jsonObj.coding.map((x, idx) => <SkillsCard data={ x } key={ idx } />) }
                    { devTools && jsonObj.devTools.map((x, idx) => <SkillsCard data={ x } key={ idx } />) }
                    { digitalArts && jsonObj.digitalArts.map((x, idx) => <SkillsCard data={ x } key={ idx } />) }
                    { languages && jsonObj.languages.map((x, idx) => <SkillsCard data={ x } key={ idx } />) }
                </div>
            </div>

            {/* <div className="navlinks">
                <Link to="/work_experiences" className="navlinks" id="next_page">{ ">"} </Link>
                <Link to="/" className="navlinks" id="prev_page">{ "<" }</Link>
                <div className="cls" />
            </div> */}
        </div>
    );
}

export default Skills;