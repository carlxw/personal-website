import { Tooltip } from "react-tooltip";

const SkillsCard = ({ data }) => {
    console.log("IN");
    return (
        <div 
            className="skills-card"
            data-tooltip-id={ data.title }
            data-tooltip-content= { data.desc }
            data-tooltip-place="top"
            data-tooltip-offset="10"
            // data-tooltip-wrapper="skills-card"
        >
            <div>
                <h2 id={ data.title }>{ data.title }</h2>
                <img className="skills-img" src={ require(`../data/img/${ data.img }`) } alt="icon" />
            </div>

            <Tooltip id={ data.title } className="react-tooltip" />
        </div>
    );
}

export default SkillsCard;