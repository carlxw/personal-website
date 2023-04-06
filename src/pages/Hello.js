import image from "../data/img/cartoonme.png";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";

import config from "../data/json/text.json";

const Hello = () => {   
    const strArr = [
        "a programmer.",
        "ambitious.",
        "creative.",
        "determined.",
        "hard working.",
        "a quick learner.",
        "versatile.",
        "curious.",
        "a Google master."
    ];

    
    const date = new Date();
    const welcome_msg1 = config.welcome1.replace("${ INSERT_DATE }", date.getFullYear() - 2004);
    const welcome_msg2 = config.welcome2;

    return (
        <div>
            <div className="hello flex-row flex-center">
                <div className="hello-left flex-col flex-left">
                    <h1>{ config.welcomeh1 }</h1>
                    {/* <Typewriter 
                        id="tw2"
                        style={{
                            "display": "block",
                            "font-size": "2em",
                            "margin-top": "0.67em",
                            "margin-bottom": "0.67em",
                            "margin-left": "0",
                            "margin-right": "0",
                            "font-weight": "bold",
                        }}
                        options={{
                            autoStart: true,
                            strings: strArr,
                            loop: true,
                            cursor: "",
                            skipAddStyles: false,
                        }}
                    /> */}

                    <div className="hello-txt flex-col flex-left">
                        <p>{ welcome_msg1 }</p>
                        <p>{ welcome_msg2 }</p>
                    </div>
                </div>

                <div className="hello-right">
                    <img src={image} alt="A cartoon of me" />
                </div>

                {/* <Link to="/skills" className="navlinks" id="next-page">{ ">" }</Link> */}
            </div>
        </div>
    );
}

export default Hello;