import { AiFillGithub, AiFillInfoCircle } from "react-icons/ai";
import { SiDevpost, SiYoutube } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";
import { FaLock } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { on } from "../components/Overlay";

const ProjCard = ({ proj, setData }) => {
    return (
        <div className="proj_card">
            <div className="proj_img">
                <img alt="Project icon" src={ require(`../data/img/${ proj.img }`) } />
                {
                    proj.protected &&
                    <>
                        <FaLock 
                            className="icon lock" 
                            size={ 30 } 
                            data-tooltip-id="lock_msg"
                            data-tooltip-content="This project is password-protected"
                        />
                        <Tooltip id="lock_msg" />
                    </>
                }
                <AiFillInfoCircle 
                    id="proj_info" 
                    style={{ color: proj.white_bg ? "black" : "white" }} 
                    size={ 35 }
                    onClick={() => {
                        setData(proj);
                        console.log(proj);
                        on();
                    }}
                />
            </div> 

            <div className="proj_title">
                <h1 style={{ color: "black" }}>{ proj.title }</h1>
                <hr />
            </div>

            <div className="proj_buttons flex-row">
                    {
                        proj.github &&
                        <a target="_blank" rel="noreferrer" href={ proj.github }>
                            <AiFillGithub className="icon card_icon" size={ 50 }/>
                        </a>
                    }
                    {
                        proj.devpost &&
                        <a target="_blank" rel="noreferrer" href={ proj.devpost }>
                            <SiDevpost className="icon card_icon" size={ 50 }/>
                        </a>
                    }
                    {
                        proj.link &&
                        <a target="_blank" rel="noreferrer" href={ proj.link }>
                            <FiExternalLink className="icon card_icon" size={ 50 }/>
                        </a>
                    }
                    {
                        proj.demo &&
                        <a target="_blank" rel="noreferrer" href={ proj.demo }>
                            <SiYoutube className="icon card_icon" size={ 50 }/>
                        </a>
                    }
                </div>
        </div>
    );
}


export default ProjCard;