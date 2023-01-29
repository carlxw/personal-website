const ProjCard = ({ data }) => {
    const render = [];
    for (var i = 0; i < data.length; i++) {
        render.push(
            <div key={ data[i].title }>
                <h2 id={ data[i].title }>{ data[i].title }</h2>
                <img style={ { height: 100, width: 100 } }src={ require(`../data/img/${data[i].img}`) } alt="logo" />
                <p>{ data[i].desc }</p>
                {   
                    // If there is a Github link
                    data[i].github && <a href={ data[i].github } target="_blank" rel="noreferrer">Github</a>
                }
                {   
                    // If there is a Devpost link
                    data[i].devpost && <a href={ data[i].devpost } target="_blank" rel="noreferrer">DevPost</a>
                }
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