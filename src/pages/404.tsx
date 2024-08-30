import { Box, Link, Stack, Typography } from "@mui/material"
import React from "react"
import { useState } from "react"
import { STACK_CENTRE } from "../components/PageWrapper"

const Error = () => {
    const [troll, setTroll] = useState(false)

    const buttonOnClickFn = () => {    
        setTimeout(() => {
            setTroll(true)
        }, 1000)
    }

    const ATagProps = {
        className: "hover_increase_small",
        href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        target: "_blank",
        rel: "noreferrer",
        sx: { textDecoration: "none", color: "white", bgcolor: "blue", pt: 2, pb: 2, pl: 4, pr: 4, borderRadius: 10 }
    }

    return (
        <Stack {...STACK_CENTRE} gap={5}>
            <Typography variant="h1" sx={{ fontWeight: "bold" }}>404 not found.</Typography>
            
            <Stack {...STACK_CENTRE} direction="column" gap={5}>
                <Typography variant="h6">Woah there, stop trying to expose any lose ends I might have...</Typography>
                <Link id="return_fake_msg" onClick={buttonOnClickFn} {...ATagProps}>
                    Lets get to where you should be right now
                </Link> 
                { troll && <Link href="https://www.carlxw.dev" id="return_real_msg" sx={{ color: "white", textDecoration: "none" }}>Here's the real link to get you back since you were too lazy to use my navbar :(</Link> }
            </Stack>
        </Stack>
    )
}

export default Error