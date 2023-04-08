import image from "../data/img/cartoonme.png";

import config from "../data/json/text.json";

const Hello = () => {   
    const date = new Date();
    const welcome_msg1 = config.welcome1.replace("{ INSERT_DATE }", date.getFullYear() - 2004);
    const welcome_msg2 = config.welcome2;

    return (
        <div>
            <div className="hello flex-row">
                <div className="hello-left flex-col flex-left">
                    <h1>{ config.welcomeh1 }</h1>

                    <div className="hello-txt flex-col flex-left">
                        <p>{ welcome_msg1 }</p>
                        <p>{ welcome_msg2 }</p>
                    </div>
                </div>

                <img className="hello-right" src={image} alt="A cartoon of me" />

                {/* <Link to="/skills" className="navlinks" id="next-page">{ ">" }</Link> */}
            </div>
        </div>
    );
}

export default Hello;