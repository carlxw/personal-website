import "./css/WorkExpCard.css";

const WorkExpCard = ({ data }) => {
    const render = [];
    for (var i = 0; i < data.length; i++) {
        render.push(
            <div key={ data[i].pos_title } className="workexp_card">
                <h2 id={ data[i].pos_title }>{ data[i].pos_title }</h2>
                <p>{ data[i].company }</p>
                <p>{ data[i].duration }</p>
                <img style={ { width: 50, height: 50 } }src={ require(`../data/img/${data[i].img}`) } alt="icon"/>
                <p>{ data[i].desc }</p>
            </div>
        );
    }

    return (
        <div className="workexp_card">
            {/* This renders an array */}
            { render }
        </div>
    );
}

export default WorkExpCard;