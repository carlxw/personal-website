import { useState } from "react";

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
            <h1>Skills</h1>

            {/* Buttons */}
            <button onClick={() => display(setOffice)}>Office</button>
            <button onClick={() => display(setCoding)}>Coding</button>
            <button onClick={() => display(setDevTools)}>Dev Tools</button>
            <button onClick={() => display(setDigitalArts)}>Digital Arts</button>
            <button onClick={() => display(setLanguages)}>Languages</button>

            {/* Content */}
            { office && <p>Office Information</p> }
            { coding && <p>Coding Information</p> }
            { devTools && <p>Dev Tools Information</p> }
            { digitalArts && <p>Digital Media Arts Information</p> }
            { languages && <p>Languages Information</p> }
        </div>
    );
}

// Create a table that takes data from a JSON
// Make buttons work

export default Skills;