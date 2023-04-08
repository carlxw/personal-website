import { AiFillGithub } from "react-icons/ai";
import { SiDevpost } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";

const ProjCard = ({ data }) => {
    // Extract the tags and list-description
    const tags = data.tags.map((x) => (
        <div className="bubble flex-row">
            <a href={ x.link } target="_blank" rel="noreferrer" key={ x.title }>{ x.title }<FiExternalLink className="icon" /></a> 
        </div>
    ));

    const desc = data.desc.map((x) => (
        // Key will raise problems if I use the same description over and over?
        <li className="list" style={{ "color": "black" }} key={ x }>{ x }</li>
    ));

    return (
        <div className="proj-card flex-col" key={ data.title }>
            <div className="proj-card-content flex-row">
                <div className="proj-left flex-col">
                    <h1 className="h1-line" id="proj-title">{ data.title }</h1>
                    <p id="proj-desc">{ data.header }</p>
                    <p id="proj-story">{ `"${ data.story }"` }</p>
                    <ul key={ data.desc }>{ desc }</ul>
                </div>
                
                <img src={ require(`../data/img/${ data.img }`) } alt="logo" />
            </div>

            <div className="proj-footer flex-row">
                <div className="gh-devpost flex-row">
                    {
                        // If there is a Github link
                        data.github && 
                        <div className="bubble flex-row">
                            <a href={ data.github } target="_blank" rel="noreferrer">GitHub</a><AiFillGithub className="icon" />
                        </div>
                    }
                    {   
                        // If there is a Devpost link
                        data.devpost && 
                        <div className="bubble flex-row">
                            <a href={ data.devpost } target="_blank" rel="noreferrer">DevPost</a><SiDevpost className="icon" />
                        </div>
                    }
                </div>

                <div className="proj-tags flex-row">{ data.tags && tags }</div>
            </div>
        </div>
    );
}

export default ProjCard;