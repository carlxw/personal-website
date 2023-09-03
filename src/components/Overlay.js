import { FiExternalLink } from "react-icons/fi";

const elements = ["overlay", "overlay_dim", "overlay_background"];
const off = () => {
    elements.forEach(x => document.getElementById(x).style.display = "none");
}

const on = () => {
    elements.forEach(x => document.getElementById(x).style.display = "block");
    document.getElementById("scroll_div").scroll(0, 0);
}

const Overlay = ({ data }) => { 
    // Extract the tags and list-description
    const tags = data?.tags?.map((x, idx) => (
        <a href={ x.link } target="_blank" rel="noreferrer" key={ `${idx}_tags` }>{ x.title }{ x.link && <FiExternalLink id="ext_link_icon" className="icon" /> }</a> 
    ));

    const desc = data?.desc_points?.map((x, idx) => (
        <li className="points_list" style={{ "color": "black" }} key={ `${idx}_desc` }>{ x }</li>
    ));

    if (Object.keys(data).length !== 0) return (
        <>
            <div id="overlay">
                    <div className="overlay_upper flex-row">
                        {/* Overlay right */}
                        <img id="proj_img" src={ require(`../data/img/${ data?.img }`) } alt="Project logo" />
                        
                        <div 
                            id="scroll_div" 
                            className="overlay_left flex-col"
                        >
                            <h1 id="proj_title">{ data?.title }</h1>
                            <p id="proj_header">{ data?.header }</p>
                            <hr id="overlay_hr" /> 
                            <p id="proj_story">{ `"${ data?.story }"` }</p>
                            <ul>{ desc }</ul>
                        </div>
                        
                    </div>

                    <div className="overlay_footer flex-row">
                        <div className="overlay_tags flex-row">
                            <p id="proj_tags_p">Tags:</p>
                            { data?.tags && tags }
                        </div>

                        <p className="close_button" onClick={ off }>Close</p>
                    </div>
            </div>

            <div id="overlay_background" />
            <div id="overlay_dim" onClick={ off } />
        </>
    );
}

export { Overlay, off, on };