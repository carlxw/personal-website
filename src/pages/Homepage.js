import image from "../data/img/cartoonme.png";

import config from "../data/json/text.json";

const Hello = () => {   
    const date = new Date();
    const welcome_msg1 = config.welcome1.replace("{ INSERT_AGE }", date.getFullYear() - 2004);
    const welcome_msg2 = config.welcome2;

    return (
        <></>
    );
}

export default Hello;