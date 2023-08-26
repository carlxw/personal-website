const off = () => {
    document.getElementById("overlay").style.display = "none";
}

const on = () => {
    document.getElementById("overlay").style.display = "block";
}

const Overlay = ({ data }) => { 
    const hr_style = {
        backgroundColor: "white",
        border: "none"
    };

    if (Object.keys(data).length !== 0) return (
        <div id="overlay" onClick={ off }>
            <div className="overlay_header">
                <h1>{ data?.title }</h1>
                <h2 style={{ fontStyle: "italic" }}>{ data?.header }</h2>
                <img alt="Project logo" src={ require(`../data/img/${ data?.img }`) }/>
            </div>
            
            <hr style={ hr_style } />

            <div className="overlay_body">
                <p>{ data?.story }</p>
                <ul>{ data?.desc_points?.map((x, idx) => <li key={ `${idx}_bullet_points` }>{ x }</li>) }</ul>
            </div>

            <div className="overlay_footer">
            { data?.tags?.map((x, idx) => <a href={ x.link } key={ `${idx}_bullet_points` }>{ x.title }</a>) }
            </div>
        </div>
    );
}

export { Overlay, off, on };