import { FiExternalLink } from "react-icons/fi";

const off = () => {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("overlay_dim").style.display = "none";
}

const on = () => {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("overlay_dim").style.display = "block";
}

const Overlay = ({ data }) => { 
    // Extract the tags and list-description
    const tags = data?.tags?.map((x, idx) => (
        <a href={ x.link } target="_blank" rel="noreferrer" key={ `${idx}_tags` }>{ x.title }<FiExternalLink id="ext_link_icon" className="icon" /></a> 
    ));

    const desc = data?.desc_points?.map((x, idx) => (
        <li className="points_list" style={{ "color": "black" }} key={ `${idx}_desc` }>{ x }</li>
    ));

    if (Object.keys(data).length !== 0) return (
        <>
            <div id="overlay">
                <div className="overlay_upper flex-row" onClick={ off }>
                    <div className="overlay_left flex-col">
                        <h1 id="proj_title">{ data?.title }</h1>
                        <p id="proj_desc">{ data?.header }</p>
                        <hr id="overlay_hr" /> 
                        <p id="proj_story">{ `"${ data?.story }"` }</p>
                        <ul>{ desc }</ul>
                    </div>
                    
                    <img src={ require(`../data/img/${ data?.img }`) } alt="Project logo" />
                </div>

                <div className="overlay_footer flex-row">
                    <div className="overlay_tags flex-row">
                        <p>Tags:</p>
                        { data?.tags && tags }
                    </div>

                    <div className="close_button" onClick={ off }>
                        Close
                    </div>
                </div>
            </div>

            <div id="overlay_dim"/>
        </>
    );
}

export { Overlay, off, on };