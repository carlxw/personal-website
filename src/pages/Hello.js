import image from "../data/img/cartoonme.png";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";

const Hello = () => {   
    const strArr = [
        "a programmer.",
        "ambitious.",
        "creative.",
        "determined.",
        "hard working."
    ];

    return (
        <div className="hello">
            <div id="hello_left">
                <h1>Hi! My name is Carl</h1>
                <h1 id="tw1">and I am</h1>
                <Typewriter 
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
                />
                <div className="cls"></div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>

            <img src={image} alt="A cartoon of me" />
            <div className="cls" />

            <Link to="/skills" className="next_page">Skills -{">"}</Link>
            <div className="cls" />
        </div>
    );
}

export default Hello;