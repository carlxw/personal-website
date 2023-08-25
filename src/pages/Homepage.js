import image from "../data/img/cartoonme.png";
import text from "../data/json/homepage_text.json";

const Hello = () => {   
    const date = new Date();

    return (
        <div className="homepage flex-row">
            <div className="homepage_left flex-col">
                <h1 id="homepage_h1">You get free money</h1>
                <div id="homepage_text">
                    { text.map((x, idx) => <p key={ idx }>{ x.replace("{ INSERT_AGE }", date.getFullYear() - 2004) }</p>)}
                </div>
            </div>
            <div className="homepage_right">
                <img id="hello_img" src={ image } alt="Cartoon me" />
            </div>
        </div>
    );
}

export default Hello;