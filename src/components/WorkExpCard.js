import "./css/WorkExpCard.css";

const WorkExpCard = ({ data }) => {
    const render = [];
    for (var i = 0; i < data.length; i++) {
        // Extracts the description
        const descArr = data[i].desc.map(x => (
            // Key will raise problems if I use the same description over and over?
            <li className="list" style={{ "color": "black" }} key={ x }>{ x }</li>
        ));

        render.push(
            <div key={ data[i].pos_title } className="workexp_card">
                <div className="left_info">
                    <h2 id={ data[i].pos_title }>{ data[i].pos_title }</h2>
                    <p id="company_duration">{ `${data[i].company} (${data[i].duration})` }</p>
                    <p id="story" className="proj_story">{ `"${ data[i].story }"` }</p>
                    <ul>{ descArr }</ul>
                </div>

                <div className="right_img">
                    <img src={ require(`../data/img/${ data[i].img }`) } alt="icon"/>
                </div>

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

export default WorkExpCard;