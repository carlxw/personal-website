import ProjCard from "../components/ProjCard";
import { useEffect } from "react";
import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa";
const jsonArr = require("../data/json/personal-projects.json");

// https://stackoverflow.com/questions/71323266/how-can-i-scroll-automatically-on-hover
const PersonalProjects = ({setData}) => {
    const projects = jsonArr.map((x, idx) => 
        <ProjCard style={{ margin: "5rem", }} proj={ x } setData={ setData } key={ idx } />
    );

    // Enable Hover-Scrolling on component mount
    useEffect(() => {
        const nav = document.querySelector(".personal_projects");
        const left = document.querySelector(".arrow-container .left_scroll");
        const right = document.querySelector(".arrow-container .right_scroll");

        let idx;

        const scrollLeft = () => {
            idx = setInterval(() => {
                nav.scrollLeft -= 3;
            }, 1);
        };

        const scrollRight = () => {
            idx = setInterval(() => {
                nav.scrollLeft += 3;
            }, 1);
        };

        const stopScroll = () => {
            clearInterval(idx);
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
                    <p>Explore around! Scroll to the right! Try some of the (hopefully) cool things I made!</p>
                    <p>Most of the things I showcase here were built with the intention to solve some kind of problem, or make my life easier.</p>
                </div>
            </div>

            <div class="arrow-container">
                <div class="left_scroll hover_increase"><FaChevronCircleLeft size={ 40 } /></div>
                <div class="right_scroll hover_increase"><FaChevronCircleRight size={ 40 } /></div>
            </div>

            <div className="personal_projects">
                { projects }
            </div>
        </div>
    );
}

export default PersonalProjects;