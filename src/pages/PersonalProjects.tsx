import React from "react"
import ProjectCard from "../components/ProjectCard"
import { useEffect } from "react"
import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa"
import { Box, Stack, Typography } from "@mui/material"
import { H1_SX } from "./Homepage"

export type ProjectData = {
    title: string,
    img: string,
    protected: boolean,
    white_bg: boolean,
    header: string,
    story: string,
    tags: { title: string, link: string }[],
    desc_points: string[],
    github: string | undefined,
    devpost: string | undefined,
    demo: string | undefined,
    link: string | undefined,
}

const JSON_DATA: ProjectData[] = require("../data/json/personal_projects.json")
const INITIAL_VELOCITY = 3.14
const ACCELERATION_DELTA = 0.025

const PersonalProjects = (props: { setData: Function }) => {
    // Enable Hover-Scrolling on component mount
    // https://stackoverflow.com/questions/71323266/how-can-i-scroll-automatically-on-hover
    useEffect(() => {
        const nav = document.querySelector(".horizontal_scrolling")
        const left = document.querySelector(".arrow_container .left_scroll")
        const right = document.querySelector(".arrow_container .right_scroll")

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
        <Stack direction="column" gap={0} alignContent="flex-start" justifyContent="flex-start" sx={{ height: "100%", maxWidth: "100%" }} className="personal_projects">
            <Stack>
                <PageMessage />
            </Stack>
            <HoverArrows />
            <ProjectCards {...props} />
        </Stack>
    )
}

const PageMessage = () => {
    return (
        <Stack direction="column" gap={2} sx={{ pt: 5, pl: 5 }}>
            <Typography variant="h1" sx={{ ...H1_SX }}>Projects Hub</Typography>
            <Stack>
                <Typography variant="h6">Scroll down! Scroll up! Scroll to the right (I recommend doing this more)! Check out some of the (hopefully) cool things I made!</Typography>
                <Typography variant="h6">Did you know that you can scroll horizontally by holding the shift key? It's way cooler than using 2 fingers to swipe on the trackpad!</Typography>
            </Stack>
        </Stack>
    )
}

const HoverArrows = () => {
    return (
        <Box zIndex={1} className="arrow_container">
            <Typography 
                sx={{ position: "absolute", top: "60vh", left: 40 }}
                className="left_scroll hover_increase"><FaChevronCircleLeft size={40}/>
            </Typography>
            <Typography 
                sx={{ position: "absolute", top: "60vh", right: 40 }}
                className="right_scroll hover_increase"><FaChevronCircleRight size={40}/>
            </Typography>
        </Box>
    )
}

const ProjectCards = (props: { setData: Function }) => {
    return (
        <Stack direction="row" alignItems="center" gap={10} sx={{ overflowX: "scroll", overflowY: "auto", padding: "0 15vh", height: "100%", maxWidth: "100%"}} className="horizontal_scrolling hide_horizontal_scrollbar">
            { 
                JSON_DATA.map((entry, i) => (
                    <ProjectCard project={entry} setData={props.setData} key={`projcard_${i}`} />
                ))
            }
        </Stack>
    )
}

export default PersonalProjects