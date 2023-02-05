import "./SkillsCard.css";

const SkillsCard = ({ data }) => {
    const render = [];
    for (var i = 0; i < data.length; i++) {
        render.push(
            <div key={ data[i].title } className="skills_card">
                <h2 id={ data[i].title }>{ data[i].title }</h2>
                <img src={ require(`../data/img/${data[i].img}`) } alt="icon" />
                <div className="cls" />
                <p>{ data[i].desc }</p>
            </div>
        );
    }

    return (
        <div className="wrapper_skills_card">
            {/* This renders an array */}
            { render }
        </div>
    );
}

export default SkillsCard;