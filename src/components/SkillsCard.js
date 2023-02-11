import "./css/SkillsCard.css";

const SkillsCard = ({ data }) => {
    const render = [];
    for (var i = 0; i < data.length; i++) {
        render.push(
            <div key={ data[i].title } className="skills_card">
                <h2 id={ data[i].title }>{ data[i].title }</h2>
                {/* <p>{ data[i].desc }</p> */}
                <img style={ {width: 50, height: 50} } src={ require(`../data/img/${data[i].img}`) } alt="icon" />
                <div className="cls" />
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