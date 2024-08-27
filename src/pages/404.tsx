import React from "react";
import { useState } from "react";

const Error = () => {
    const [troll, setTroll] = useState(false);

    return (
        <div className="err flex-col flex-center">
            <h1 id="err-h1">404 not found.</h1>
            
            <div className="err-txt flex-col flex-center">
                <p id="err-p">Woah there, stop trying to expose any lose ends I might have...</p>
                <a id="return-fake-msg" onClick={ () => {
                    setTimeout(() => {
                        setTroll(true);
                    }, 1000);
                } } className="hover_increase_small" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noreferrer">Lets get to where you should be right now</a> 
                <br />
                { troll && <a id="return-real-msg" href="https://www.carlxw.dev">Here's the real link to get you back since you were too lazy to use my navbar :(</a> }
            </div>
        </div>
    );
}

export default Error;