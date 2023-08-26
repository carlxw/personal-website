import ProjCard from "../components/ProjCard";
import { Overlay } from "../components/Overlay";
import { useState } from "react";
const jsonArr = require("../data/json/personal-projects.json");

const PersonalProjects = () => {
    const [data, setData] = useState({});

    const projects = jsonArr.map((x, idx) => 
        <ProjCard style={{ margin: "5rem", }} proj={ x } setData={ setData } key={ idx }  />
    );

    return (
        <>
            <div className="proj_text">
                <h1 id="proj_h1">Project Hub</h1>
                <div className="flex-col">
                    <p>Explore around! Scroll to the right! Try some of the (hopefully) cool things I made</p>
                    <p>Most of the things I showcase here were built with the intention to solve some kind of problem!</p>
                </div>
            </div>
            { data && <Overlay data={ data } /> }
            <div className="personal_projects">
                { projects }
            </div>
        </>
    );
}

export default PersonalProjects;