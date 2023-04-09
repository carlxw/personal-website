import ProjCard from "../components/ProjCard";

const jsonArr = require("../data/json/personal-projects.json");

const PersonalProjects = () => {
    return (
        <div className="personal-projects padding flex-col extend" id="personal-projects">
            <h1 className="h1-gap bold">{ `Personal Projects (${jsonArr.length})` }</h1>

            <div className="proj-content flex-col">
                { jsonArr.map((x, idx) => <ProjCard data={ x } key={ idx } />) }
            </div>
        </div>
    );
}

export default PersonalProjects;