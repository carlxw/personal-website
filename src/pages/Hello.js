import image from "../data/img/cartoonme.png";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";

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
    const welcome_msg1 = `Welcome to my website! I am a ${ date.getFullYear() - 2004 } years old engineering student who is studying at the University of Waterloo. To be clear, what you are looking at is my pitful attempt of creating a website from scratch, and CSS'ing it as I go along (which I do not recommend).`;
    const welcome_msg2 = `I'm just (sorta) kidding. In case if you were wondering, I love playing the piano, working on personal projects, and playing video games!`

    return (
        <div>
            <div className="hello">
                <div>
                    <div className="hello_left">
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
                            <p>{ welcome_msg1 }</p>
                            <p>{ welcome_msg2 }</p>
                        </div>

                        <div className="hello_right"><img src={image} alt="A cartoon of me" /></div>
                        <div className="cls" />

                        <Link to="/skills" className="navlinks" id="next_page">{ ">" }</Link>
                    </div>
                </div>

            <div className="block" />
        </div>
    );
}

export default Hello;