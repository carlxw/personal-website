import ProjCard from "../components/ProjCard";

const jsonArr = require("../data/json/personal-projects.json");

const PersonalProjects = () => {
    return (
        <>
            <ProjCard data={ jsonArr[0] }></ProjCard>
        </>
    );
}

export default PersonalProjects;