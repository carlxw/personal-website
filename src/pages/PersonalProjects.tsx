import React from "react"
import ProjCard from "../components/ProjCard"
import { useEffect } from "react"
import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa"
import { Stack, Typography } from "@mui/material"
import { H1_SX } from "./Homepage"

type ProjectData = {
    title: string,
    img: string,
    protected: boolean,
    white_bg: boolean,
    header: string,
    story: string,
    tags: { title: string, link: string }[],
    desc_points: string[],
    github: string | null,
    devpost: string | null,
    demo: string | null,
    link: string | null,
}

const JSON_DATA: ProjectData[] = require("../data/json/personal_projects.json")
const INITIAL_VELOCITY = 3.14
const ACCELERATION_DELTA = 0.025

const PersonalProjects = ({setData}) => {
    // Enable Hover-Scrolling on component mount
    // https://stackoverflow.com/questions/71323266/how-can-i-scroll-automatically-on-hover
    useEffect(() => {
        const nav = document.querySelector(".personal_projects")
        const left = document.querySelector(".arrow-container .left_scroll")
        const right = document.querySelector(".arrow-container .right_scroll")

        if (!nav || !left || !right) return

        let idx, acceleration = 0

        const scrollLeft = () => {
            idx = setInterval(() => {
                nav.scrollLeft -= INITIAL_VELOCITY - acceleration
                acceleration -= ACCELERATION_DELTA
            }, 1)
        }

        const scrollRight = () => {
            idx = setInterval(() => {
                nav.scrollLeft += INITIAL_VELOCITY + acceleration
                acceleration += ACCELERATION_DELTA
            }, 1)
        }

        const stopScroll = () => {
            clearInterval(idx)
            acceleration = 0
        }

        left.addEventListener("mouseenter", scrollLeft)
        left.addEventListener("mouseleave", stopScroll)
        right.addEventListener("mouseenter", scrollRight)
        right.addEventListener("mouseleave", stopScroll)

        // Cleanup on component unmount
        return () => {
            left.removeEventListener("mouseenter", scrollLeft)
            left.removeEventListener("mouseleave", stopScroll)
            right.removeEventListener("mouseenter", scrollRight)
            right.removeEventListener("mouseleave", stopScroll)
            clearInterval(idx)
        }
    }, [])

    return (
        <Stack direction="column">
            <Stack gap={2} alignContent="flex-start">
                <Typography variant="h1" sx={{ ...H1_SX }}>Projects Hub</Typography>
                <Stack>
                    <Typography variant="h6">Scroll down! Scroll up! Scroll to the right (I recommend doing this more)! Check out some of the (hopefully) cool things I made!</Typography>
                    <Typography variant="h6">Did you know that you can scroll horizontally by holding the shift key? It's way cooler than using 2 fingers to swipe on the trackpad!</Typography>
                </Stack>
            </Stack>

            {/* <Stack>
                <Typography className="left_scroll hover_increase"><FaChevronCircleLeft size={40}/></Typography>
                <Typography className="right_scroll hover_increase"><FaChevronCircleRight size={40}/></Typography>
            </Stack> */}

            {/* <Stack direction="row">
                { 
                    JSON_DATA.map((entry, idx) => (
                        <ProjCard style={{ margin: "5rem", }} proj={ entry } setData={ setData } key={ idx } />
                    ))
                }
            </Stack> */}
        </Stack>
    )
}

export default PersonalProjects