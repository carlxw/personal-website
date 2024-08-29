import { AiFillGithub, AiFillInfoCircle } from "react-icons/ai"
import { SiDevpost, SiYoutube } from "react-icons/si"
import { FiExternalLink } from "react-icons/fi"
import { FaLock } from "react-icons/fa"
import { overlayOn } from "./Overlay"
import React from "react"
import { Box, Button, Divider, Link, Stack, Typography } from "@mui/material"
import { ProjectData } from "../pages/PersonalProjects"

const ProjCard = (props: { project: ProjectData, setData: Function}) => {
    const { project, setData } = props
    const buttons = [
        { key: "github", icon: AiFillGithub, },
        { key: "devpost", icon: SiDevpost, },
        { key: "link", icon: FiExternalLink, },
        { key: "demo", icon: SiYoutube, },
    ]

    return (
        <Stack sx={{ border: 10, borderRadius: 10, background: "white" }} gap={1} className="hover_increase_smaller">
            <Stack>
                <Box component="img" alt="Project icon" src={ require(`../data/img/${ project.img }`) } sx={{height: "30vh", width: "30vh", borderStartStartRadius: 30, borderStartEndRadius: 30 }} draggable="false" />
                {
                    project.protected &&
                    <>
                        <FaLock 
                            className="icon lock" 
                            size={ 30 } 
                            data-tooltip-id="lock_msg"
                            data-tooltip-content="This project is password-protected"
                        />
                        {/* <Tooltip id="lock_msg" /> */}
                    </>
                }
                <AiFillInfoCircle 
                    style={{ color: (project.white_bg ? "black" : "white"), position: "fixed", cursor: "pointer" }} 
                    size={ 35 }
                    onClick={() => {
                        setData(project)
                        overlayOn()
                    }}
                />
            </Stack> 

            <Typography variant="h5" style={{ fontWeight: "bold", color: "black" }}>{project.title}</Typography>
            <Divider sx={{ bgcolor: "black", height: 5 }} />

            <Stack direction="row" gap={10} justifyContent="center" alignItems="center" height={100}>
                {
                    buttons.map((config, i) => {
                        const destination = project[config.key]
                        if (!destination) {
                            return
                        }
                        
                        return <Link href={destination} target="_blank" rel="noreferrer" sx={{ color: "black" }} className="hover_increase">
                            <config.icon size={50} />
                        </Link>
                    })
                }
            </Stack>
        </Stack>
    )
}

export default ProjCard