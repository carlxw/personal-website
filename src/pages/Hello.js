import image from "../data/img/cartoonme.png";

import config from "../data/json/text.json";

const Hello = () => {   
    const date = new Date();
    const welcome_msg1 = config.welcome1.replace("{ INSERT_DATE }", date.getFullYear() - 2004);
    const welcome_msg2 = config.welcome2;

    return (
        <div className="hello-container flex-col">
            <div className="hello flex-row">
                <div className="hello-left flex-col flex-left">
                    <h1 className="hello-h1">{ config.welcomeh1 }</h1>

                    <div className="hello-txt flex-col flex-left">
                        <p id="abc">{ welcome_msg1 }</p>
                        <p>{ welcome_msg2 }</p>
                    </div>
                    <p id="hello-msg">{ config.welcome_msg }</p>
                </div>

                <img className="hello-right" src={image} alt="A cartoon of me" />
            </div>
        </div>
    );
}

export default Hello;