import { Box, Button, Divider, Link, List, ListItem, ListItemIcon, Stack, Typography } from "@mui/material"
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

const CloseButton = () => {
    return (
        <Button
            variant="contained"
            color="error" // MUI's built-in red color
            sx={{
                backgroundColor: 'red', // Ensure the button is red
                color: 'white', // White text color
                '&:hover': {
                    backgroundColor: 'darkred', // Darker red on hover
                },
                padding: '8px 16px',
                borderRadius: '4px',
            }}
            onClick={overlayOff}
        >
            Close
        </Button>
    );
};
  

export const Overlay = ({data}) => { 
    const tags = data?.tags?.map((x: ProjectData, idx: number) => (
        <Link 
            href={x.link} target="_blank" rel="noreferrer" key={`${idx}_tags`}
            sx={{ textDecoration: "underline", color: "black", fontSize: "1.15rem"}}
        >
            <Stack direction="row" gap={1}>
                {x.title}
                {x.link && <FiExternalLink size={17.5} style={{ textAlign: "center", marginTop: "4px" }} />}
            </Stack>
        </Link> 
    ))

    const desc = data?.desc_points?.map((description: string, idx: number) => (
        <ListItem sx={{ color: "black", display: "list-item", padding: "2px 0" }} key={`${idx}_desc`}>
            {description}
        </ListItem>
    ))

    if (Object.keys(data).length !== 0) return (
        <>
            <Stack id="overlay" >
                <Stack className="overlay_upper" direction="row" sx={{ pb: 3 }}>
                    <Box component="img" id="proj_img" src={require(`../data/img/${ data?.img }`)} alt="Project logo" draggable="false" />
                    <Stack className="overlay_left" gap={1}>
                        <Typography color="black" variant="h3" sx={{ fontWeight: "bold" }}>{data?.title}</Typography>
                        <Typography color="black" variant="h6" sx={{ fontStyle: "italic" }}>{data?.header}</Typography>
                        <Divider sx={{ bgcolor: "black", height: 2 }} /> 
                        <Typography color="black" variant="body1" sx={{ fontSize: "1.25rem", lineHeight: "1.5rem" }}>{`"${ data?.story }"`}</Typography>
                        <List color="black" sx={{ fontSize: "1.25rem", listStyleType: "disc", pl: 4 }}>{desc}</List>
                    </Stack>
                </Stack>

                <Stack direction="row" justifyContent="space-between">
                    <Stack direction="row" gap={2} alignItems="center">
                        <Typography color="black" variant="h6">Tags:</Typography>
                        <Stack direction="row" gap={3}>
                            { data?.tags && tags }
                        </Stack>
                    </Stack>
                    <CloseButton />
                </Stack>
            </Stack>

            <Stack id="overlay_border" />
            <Stack id="overlay_background" onClick={overlayOff} />
        </>
    )
}
