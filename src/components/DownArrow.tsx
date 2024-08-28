import { SxProps, Typography } from "@mui/material";
import React from "react";
import { useEffect } from "react"

const DOWN_ARROW_SX: SxProps = { 
    fontSize: "14px", 
    cursor: "pointer",
    position: "absolute",
    top: "93vh",
}

const DownArrow = () => {
    useEffect(() => {
        const animatedDownArrow = document.querySelector("#down_arrow");
        animatedDownArrow!.classList.add("animate__animated", "animate__flip", "animate__slow", "animate__infinite");
    }, []);

    const scrollToBottom = () => {
        window.scrollTo( {
            top: document.body.scrollHeight,
            behavior: "smooth",
        });
    }

    return <Typography id="down_arrow" sx={{ ...DOWN_ARROW_SX }} onClick={ scrollToBottom }>▼</Typography>
}

export default DownArrow
