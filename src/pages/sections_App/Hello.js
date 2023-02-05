import image from "../../data/img/cartoonme.png";

import Typewriter from "typewriter-effect";

import "./css/Hello.css";
import "./css/Sections.css";

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
            <div className="wrapper_hello_1">
                <div className="h1_intro">
                    <h1 className="link_header">Hi! My name is Carl and</h1>
                    <h1 id="typewriter_1">I am</h1>
                    <Typewriter 
                        id="typewriter_2"
                        options={{
                            autoStart: true,
                            strings: strArr,
                            loop: true,
                            cursor: "",
                            skipAddStyles: false
                        }}
                    />
                    <div className="cls" />
                </div>

                <div className="wrapper_hello">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
            
            <div className="wrapper_hello_2">
                <img src={image} alt="A cartoon of me" />
            </div>

            <div className="cls" />
        </div>
    );
}

export default Hello;