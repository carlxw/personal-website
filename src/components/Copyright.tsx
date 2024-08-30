import { Stack, Typography } from "@mui/material"
import React from "react"
import { STACK_CENTRE } from "./PageWrapper"

const Copyright = () => {
    return (
        <Stack {...STACK_CENTRE} sx={{ mb: 1 }}>
            <Typography style={{ fontSize: "12px" }}>
                All mediae in my webpage is used and/or modified under Creative Commons attributions or fair use/dealing. Email me if you believe I am stepping out of bounds in displaying your beautiful artwork on my beautiful webpage.
            </Typography>
        </Stack>
    )
}

export default Copyright