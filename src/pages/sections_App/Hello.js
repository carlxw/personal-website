import "./Sections.css";
import image from "../../data/img/cartoonme.png";

const Hello = () => {
    var message = "[animated text]"
    return (
        <div className="hello">
            <h1>Hello! My name is Carl and I am {message}</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <img style={{ width: 200, height: 200 }} src={image} alt="A cartoon of me" />
        </div>
    );
}

export default Hello;