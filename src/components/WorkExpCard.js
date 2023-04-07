const WorkExpCard = ({ data }) => {
    // Extracts the description
    const descArr = data.desc.map(x => (
        // Key will raise problems if I use the same description over and over?
        <li className="list" key={ x }>{ x }</li>
    ));

    return (
        <div className="workexp-card flex-row">
            <div className="work-exp-left flex-col">
                <h1 className="h1-line" id={ data.pos_title }>{ data.pos_title }</h1>

                <h2 id="company-duration">{ `${data.company} (${data.duration})` }</h2>

                <p id="story" className="proj-story">{ `"${ data.story }"` }</p>

                <ul>{ descArr }</ul>
            </div>

            <img src={ require(`../data/img/${ data.img }`) } alt="icon"/>
        </div>
    );
}

export default WorkExpCard;