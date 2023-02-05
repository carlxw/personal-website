import image from "../../data/img/cartoonme.png";

import Typewriter from "typewriter-effect";

import "./Hello.css";

const Hello = () => {
    const text = "Hi! My name is Carl and I am "
    
    const strArr = [
        "a programmer.",
        "ambitious.",
        "creative.",
        "determined."
    ];

    return (
        <div className="hello">
            <div className="h1_intro">
                <h1 className="link_header">{ text }</h1>
                <Typewriter 
                    id="typewriter"
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
                <div classname="cls" />
            </div>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <img style={{ width: 200, height: 200 }} src={image} alt="A cartoon of me" />

            <div className="cls" />
        </div>
    );
}

export default Hello;