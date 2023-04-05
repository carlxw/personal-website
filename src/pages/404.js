import { Link } from "react-router-dom";
import { useState } from "react";

const Error = () => {
    const [troll, setTroll] = useState(false);

    return (
        <div className="err flex-col flex-center">
            <h1 id="err-h1">404 not found.</h1>
            
            <div className="err-txt flex-col flex-center">
                <p id="err-p">Woah there, stop trying to expose any lose ends I might have...</p>

                <a id="return-fake-msg" onClick={ () => setTroll(true) } href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noreferrer">Lets get to where you should be right now</a> 

                <br />

                { troll && <Link id="return-real-msg" to="/">Here's the real link to get you back since you're too lazy to use my navbar :(</Link> }
            </div>
        </div>
    );
}

export default Error;