import ProjCard from "../components/ProjCard";
import { Overlay } from "../components/Overlay";
import { useState } from "react";
const jsonArr = require("../data/json/personal-projects.json");

const PersonalProjects = () => {
    const [data, setData] = useState();

    const projects = jsonArr.map((x, idx) => 
        <ProjCard style={{ margin: "5rem", }} proj={ x } setData={ setData } key={ idx }  />
    );

    return (
        <>
            <h1>Project Hub</h1>
            <Overlay data={ data } />
            <div className="personal_projects">
                { projects }
            </div>
        </>
    );
}

export default PersonalProjects;