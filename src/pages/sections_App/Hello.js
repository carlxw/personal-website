import "./Sections.css";
import image from "../../data/img/cartoonme.png";

import Typewriter from "typewriter-effect";

const Hello = () => {
    const text = "Hi! My name is Carl and I am "
    
    const strArr = [
        "a programmer",
        "ambitious",
        "creative",
        "determined"
    ];

    return (
        <div className="hello">
            <h1>{ text }</h1>
            <Typewriter 
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
            />
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <img style={{ width: 200, height: 200 }} src={image} alt="A cartoon of me" />
        </div>
    );
}

export default Hello;