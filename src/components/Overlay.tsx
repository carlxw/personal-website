import { Box, Button, Divider, Stack, Typography } from "@mui/material"
import React from "react"
import { FiExternalLink } from "react-icons/fi"
import { ProjectData } from "../pages/PersonalProjects"

const ELEMENTS = ["overlay", "overlay_background", "overlay_border"]

export const overlayOff = () => {
    // Run the animation
    const domElements = ELEMENTS.map(x => document.getElementById(x))
    domElements.forEach(element => {
        if (element) {
            element.style.animationName = "scale-down-center"
        }
    })

    // Hide everything after 0.2s
    setTimeout(() => domElements.forEach(element => {
        if (element) {
            element.style.display = "none"
        }
    }), 100)

    // @ts-ignore: Just turn off the background
    document.getElementById("overlay_background").style.display = "none"
}

// Worst hack - Calling function is enough to enable
export const overlayOn = () => {
    ELEMENTS.forEach(x => {
        let element = document.getElementById(x) // Calling this function...
        if (element) {
            element.style.display = "block"
            element.style.animationName = "scale-up-center"
        }
    })
}

export const Overlay = ({data}) => { 
    const tags = data?.tags?.map((x: ProjectData, idx: number) => (
        <a href={x.link} target="_blank" rel="noreferrer" key={`${idx}_tags`}>{x.title}{x.link && <FiExternalLink id="ext_link_icon" className="icon" />}</a> 
    ))

    const desc = data?.desc_points?.map((x, idx) => (
        <li className="points_list" style={{ "color": "black" }} key={`${idx}_desc`}>{x}</li>
    ))


    if (Object.keys(data).length !== 0) return (
        <>
            <Stack id="overlay" >
                <Stack className="overlay_upper" direction="row">
                    {/* Overlay right */}
                    <Box component="img" id="proj_img" src={require(`../data/img/${ data?.img }`)} alt="Project logo" draggable="false" />
                    
                    <Stack 
                        id="scroll_div" 
                        className="overlay_left"
                        >
                        <Typography color="black" variant="h3" sx={{ fontWeight: "bold" }}>{data?.title}</Typography>
                        <Typography color="black" variant="h6" sx={{ fontStyle: "italic" }}>{data?.header}</Typography>
                        <Divider sx={{ bgcolor: "black", height: 2 }} /> 
                        <Typography color="black" id="proj_story">{`"${ data?.story }"`}</Typography>
                        <Typography color="black">{desc}</Typography>
                    </Stack>
                </Stack>

                <Stack direction="row" justifyContent="space-between">
                    <Stack direction="row" gap={2} alignItems="center">
                        <Typography color="black" variant="h6">Tags:</Typography>
                        <Typography color="black" variant="body1" sx={{ textDecoration: "underline" }}>{ data?.tags && tags }</Typography>
                    </Stack>

                    <Button onClick={overlayOff}>Close</Button>
                </Stack>
            </Stack>

            <Stack id="overlay_border" />
            <Stack id="overlay_background" onClick={ overlayOff } />
        </>
    )
}
