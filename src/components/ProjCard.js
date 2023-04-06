import { AiFillGithub } from "react-icons/ai";
import { SiDevpost } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";

const ProjCard = ({ data }) => {
    // Extract the tags and list-description
    const tags = data.tags.map((x) => (
        x.link ? 
        <a href={ x.link } target="_blank" rel="noreferrer" key={ x.title }>{ x.title }<FiExternalLink className="icon" /></a> 
        : 
        <p id="nolink" key={ x.title }>{ x.title }</p>
    ));

    const desc = data.desc.map((x) => (
        // Key will raise problems if I use the same description over and over?
        <li className="list" style={{ "color": "black" }} key={ x }>{ x }</li>
    ));

    return (
        <div className="proj-card flex-col" key={ data.title }>
            <div className="proj-card-content flex-row">
                <div className="proj-left flex-col">
                    <h1 id="proj-title">{ data.title }</h1>
                    <p id="proj-desc">{ data.header }</p>
                    <p id="proj-story">{ `"${ data.story }"` }</p>
                    <ul key={ data.desc }>{ desc }</ul>
                </div>
                
                <img src={ require(`../data/img/${ data.img }`) } alt="logo" />
            </div>

            <div className="proj-footer flex-row">
                <div className="gh-devpost flex-row">
                    {
                        data.github && <a className="bubble" href={ data.github } target="_blank" rel="noreferrer">GitHub <AiFillGithub className="icon" /></a>
                    }
                    {   
                        // If there is a Devpost link
                        data.devpost && <a className="bubble" href={ data.devpost } target="_blank" rel="noreferrer">DevPost<SiDevpost className="icon" /></a>
                    }
                </div>

                <div className="proj-tags flex-row">{ data.tags && tags }</div>
            </div>
        </div>
    );
}

export default ProjCard;