import ProjCard from "../components/ProjCard";
const jsonArr = require("../data/json/personal_projects.json");

const PersonalProjects = () => {
    return (
        <div className="personal-projects" id="personal_projects">
            <h1>Personal Projects -------------------------</h1>
            <p>A collection of things that I made or am apart of</p>
            <ProjCard data={jsonArr} />
        </div>
    );

    // Dynamically create a list of personal projects
}

export default PersonalProjects;