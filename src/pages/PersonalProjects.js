import ProjCard from "../components/ProjCard";
const jsonArr = require("../data/json/personal-projects.json");

const PersonalProjects = () => {
    const projects = jsonArr.map((x, idx) => 
        <ProjCard style={{ margin: "5rem", }} proj={ x } key={ idx } />
    );

    return (
        <div className="personal_projects">
            { projects }
        </div>
    );
}

export default PersonalProjects;