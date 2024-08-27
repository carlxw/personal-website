import ProjCard from "../components/ProjCard";
import { useEffect } from "react";
import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa";
import DownArrow from "../components/DownArrow";
const JSON_DATA = require("../data/json/personal-projects.json");

const INITIAL_VELOCITY = 3.14;
const ACCELERATION_DELTA = 0.025;
const PersonalProjects = ({setData}) => {
    const projects = JSON_DATA.map((entry, idx) => (
        <ProjCard style={{ margin: "5rem", }} proj={ entry } setData={ setData } key={ idx } />
    ));
    
    // Enable Hover-Scrolling on component mount
    // https://stackoverflow.com/questions/71323266/how-can-i-scroll-automatically-on-hover
    useEffect(() => {
        const nav = document.querySelector(".personal_projects");
        const left = document.querySelector(".arrow-container .left_scroll");
        const right = document.querySelector(".arrow-container .right_scroll");

        if (!nav || !left || !right) return;

        let idx, acceleration = 0;

        const scrollLeft = () => {
            idx = setInterval(() => {
                nav.scrollLeft -= INITIAL_VELOCITY - acceleration;
                acceleration -= ACCELERATION_DELTA;
            }, 1);
        };

        const scrollRight = () => {
            idx = setInterval(() => {
                nav.scrollLeft += INITIAL_VELOCITY + acceleration;
                acceleration += ACCELERATION_DELTA;
            }, 1);
        };

        const stopScroll = () => {
            clearInterval(idx);
            acceleration = 0;
        };

        left.addEventListener("mouseenter", scrollLeft);
        left.addEventListener("mouseleave", stopScroll);
        right.addEventListener("mouseenter", scrollRight);
        right.addEventListener("mouseleave", stopScroll);

        // Cleanup on component unmount
        return () => {
            left.removeEventListener("mouseenter", scrollLeft);
            left.removeEventListener("mouseleave", stopScroll);
            right.removeEventListener("mouseenter", scrollRight);
            right.removeEventListener("mouseleave", stopScroll);
            clearInterval(idx);
        };
    }, []);

    return (
        <div className="proj_page">
            <div className="proj_text">
                <h1 id="proj_h1">Projects Hub</h1>
                <div className="flex-col">
                    <p>Scroll down! Scroll up! Scroll to the right (I recommend doing this more)! Check out some of the (hopefully) cool things I made!</p>
                    {/* <p>The projects I showcase here were built with the intention to solve some kind of problem, or make my life easier.</p> */}
                    <p>Did you know that you can scroll horizontally by holding the shift key? It's way cooler than using 2 fingers to swipe on the trackpad!</p>
                </div>
            </div>

            <div className="arrow-container">
                <div className="left_scroll hover_increase"><FaChevronCircleLeft size={40}/></div>
                <div className="right_scroll hover_increase"><FaChevronCircleRight size={40}/></div>
            </div>

            <div className="personal_projects">
                { projects }
            </div>
        </div>
    );
}

export default PersonalProjects;