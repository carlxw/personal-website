import React from "react";
import image from "../data/img/cartoonme.png";
import { Box, BoxProps, Stack, StackProps, SxProps, Typography } from "@mui/material";

const IMAGE_SX: SxProps = {
    borderRadius: 10,
    maxWidth: "30vw",
    height: "auto",
    m: 0, p: 0,
    border: 10,
    borderColor: "white",
}

const IMAGE_BOX_PROPS: BoxProps & { alt: string, src: string } = {
    component: "img",
    alt: "Cartoon me.",
    src: image,
    sx: { ...IMAGE_SX },
}

const Hello = () => {   
    const date = new Date();
    const PAGE_CONFIG: StackProps = {
        direction: "row",
        sx: { p: 10 },
        justifyContent: "center",
        alignItems: "center",
    }

    return (
        <Stack { ...PAGE_CONFIG }>
            <Box>
                <Typography>You get free money!</Typography>
                <Typography>Just kidding! Now that I have your attention, Hi! My name is Carl and I am a { date.getFullYear() - 2004 } years old student studying Computer Engineering at the University of Waterloo!</Typography>
                <Typography>My favourite quote is from Bill Gates: <em>“I choose a lazy person to do a hard job, because a lazy person will find an easy way to do it.”</em></Typography>
                <Typography>If you ever want to connect, feel free to find my socials below!</Typography>
            </Box>
            <Box { ...IMAGE_BOX_PROPS }/>
        </Stack>
    )
}

export default Hello;