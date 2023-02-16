import "./css/WorkExpCard.css";

const WorkExpCard = ({ data }) => {
    const render = [];
    for (var i = 0; i < data.length; i++) {
        render.push(
            <div key={ data[i].pos_title } className="workexp_card">
                <div className="left_info">
                    <h2 id={ data[i].pos_title }>{ data[i].pos_title }</h2>
                    <p id="company_duration">{ `${data[i].company} (${data[i].duration})` }</p>
                    <p>{ data[i].desc }</p>
                </div>

                <div className="right_img">
                    <img src={ require(`../data/img/${data[i].img}`) } alt="icon"/>
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