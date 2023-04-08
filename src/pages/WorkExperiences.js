import WorkExpCard from "../components/WorkExpCard";

const jsonArr = require("../data/json/work_experience.json");

const WorkExperiences = () => {
    return (
        <div className="experiences padding flex-col extend" id="work-experiences">
            <h1 id="h1-title" className="h1-gap bold">{ `Work Experiences (${jsonArr.length})` }</h1>

            <div className="exp-content flex-col">
                { jsonArr.map((x, idx) => (<WorkExpCard data={x} key={ idx } />)) }
            </div>
        </div>
    );
}

export default WorkExperiences;