const ProjCard = ({ data }) => {
    const render = [];
    for (var i = 0; i < data.length; i++) {
        render.push(
            <div key={ data[i].title }>
                <h2 id={ data[i].title }>{ data[i].title }</h2>
                <p>{ data[i].img }</p>
                <p>{ data[i].desc }</p>
            </div>
        );
    }

    return (
        <div className="proj_card">
            {/* This renders an array */}
            { render }
        </div>
    );
}

export default ProjCard;