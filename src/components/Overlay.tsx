import React from "react";
import { FiExternalLink } from "react-icons/fi";

const ELEMENTS = ["overlay", "overlay_background", "overlay_border"];

const overlayOff = () => {
    // Run the animation
    const domElements = ELEMENTS.map(x => document.getElementById(x));
    domElements.forEach(element => {
        if (element) {
            element.style.animationName = "scale-down-center";
        }
    });

    // Hide everything after 0.2s
    setTimeout(() => domElements.forEach(element => {
        if (element) {
            element.style.display = "none"
        }
    }), 100);

    // @ts-ignore: Just turn off the background
    document.getElementById("overlay_background").style.display = "none";
}

// Worst hack - Calling function is enough to enable
const overlayOn = () => {
    ELEMENTS.forEach(x => {
        let element = document.getElementById(x); // Calling this function...
        if (element) {
            element.style.display = "block";
            element.style.animationName = "scale-up-center";
        }
    });
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
                        <span className="overlay_tags flex-row">
                            <p id="proj_tags_p">Tags:</p>
                            { data?.tags && tags }
                        </span>

                        <p className="close_button hover_increase_small" onClick={ overlayOff }>Close</p>
                    </div>
            </div>

            <div id="overlay_border" />
            <div id="overlay_background" onClick={ overlayOff } />
        </>
    );
}

export { Overlay, overlayOff as off, overlayOn as on };