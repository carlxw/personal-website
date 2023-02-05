import ProjCard from "../../components/ProjCard";
const jsonArr = require("../../data/json/personal_projects.json");

const PersonalProjects = () => {
    return (
        <section id="personal_projects">
            <div className="personal-projects">
                <h1 className="link_header">Personal Projects -------------------------</h1>
                <p>A collection of things that I made or am apart of</p>
                <ProjCard data={jsonArr} />
            </div>
        </section>
    );

    // Dynamically create a list of personal projects
}

export default PersonalProjects;