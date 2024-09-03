import React from "react"
import image from "../data/img/cartoonme.png"
import { Box, BoxProps, Stack, StackProps, SxProps, Typography } from "@mui/material"
import { STACK_CENTRE } from "../components/PageWrapper"

export const CENTER_ADJUSTMENT = { pt: "8vh" }

const IMAGE_SX: SxProps = {
    borderRadius: 5,
    maxWidth: "33vw",
    height: "auto",
    border: 10,
    borderColor: "white",
}

const IMAGE_BOX_PROPS: BoxProps & { alt: string, src: string } = {
    component: "img",
    alt: "Cartoon me.",
    src: image,
    sx: { ...IMAGE_SX },
    draggable: "false",
}

const PAGE_CONFIG: StackProps = {
    direction: "row",
    sx: { pl: 10, pr: 10, ...CENTER_ADJUSTMENT },
    gap: 15,
    ...STACK_CENTRE,
}

export const H1_SX: SxProps = { fontWeight: "bold", textDecoration: "underline", fontSize: "4.7em", whiteSpace: "nowrap" }

const Hello = () => {   
    const date = new Date()

    return (
        <Stack { ...PAGE_CONFIG } className="homepage">
            <Stack gap={5} sx={{ maxWidth: "50vw" }}>
                <Typography variant="h1" sx={{ ...H1_SX }}>You get free money.</Typography>
                <Typography variant="h6">Just kidding! Now that I have your attention, Hi! My name is Carl and I am a { date.getFullYear() - 2004 } years old student studying Computer Engineering at the University of Waterloo!</Typography>
                <Typography variant="h6">My favourite quote is from Bill Gates: <em>“I choose a lazy person to do a hard job, because a lazy person will find an easy way to do it.”</em></Typography>
                <Typography variant="h6">If you ever want to connect, feel free to find my socials below!</Typography>
            </Stack>
            <Box { ...IMAGE_BOX_PROPS }/>
        </Stack>
    )
}

export default Hello