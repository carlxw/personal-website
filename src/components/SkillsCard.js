import { Tooltip } from "react-tooltip";

const SkillsCard = ({ data }) => {
    const render = [];
    for (var i = 0; i < data.length; i++) {
        render.push(
            <div key={ data[i].title } className="skills_card"
                data-tooltip-id={ data[i].title }
                data-tooltip-content= { data[i].desc }
                data-tooltip-place="top"
                data-tooltip-offset="10"
                data-tooltip-wrapper="skills_card"
            >
                <div>
                    <h2 id={ data[i].title }>{ data[i].title }</h2>
                    <img style={ {width: 50, height: 50} } src={ require(`../data/img/${ data[i].img }`) } alt="icon" />
                </div>
                <div className="cls" />

                <Tooltip id={ data[i].title } style={{ width: "500px", textAlign: "center", padding: "3%" }} />
            </div>
        );
    }

    return (
        <div>
            {/* This renders an array */}
            { render }
        </div>
    );
}

export default SkillsCard;