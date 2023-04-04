import { Tooltip } from "react-tooltip";

const SkillsCard = ({ data }) => {
    console.log("IN");
    return (
        <div key={ data.title } className="skills_card"
            data-tooltip-id={ data.title }
            data-tooltip-content= { data.desc }
            data-tooltip-place="top"
            data-tooltip-offset="10"
            data-tooltip-wrapper="skills_card"
        >
            <div>
                <h2 id={ data.title }>{ data.title }</h2>
                <img style={ {width: 50, height: 50} } src={ require(`../data/img/${ data.img }`) } alt="icon" />
            </div>

            <Tooltip id={ data.title } style={{ width: "500px", textAlign: "center", padding: "3%" }} />
        </div>
    );
}

export default SkillsCard;