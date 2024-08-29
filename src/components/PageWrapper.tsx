import Navbar from "./Navbar"
import { Stack } from "@mui/material"
import Footer from "./Footer"
import { Dispatch, PropsWithChildren, SetStateAction } from "react"
import React from "react"
import DownArrow from "./DownArrow"
import { FontOptions } from "../App"

const PAGE_WRAPPER_SX = { 
    height: "93vh", 
    justifyContent: "center", 
    alignItems: "center",
}

export type FontSetter = { fontFamily: FontOptions, setFontFamily: Dispatch<SetStateAction<FontOptions>> }

const PageWrapper = (props: PropsWithChildren & FontSetter) => {
    const { fontFamily, setFontFamily } = props

    return (
        <>
            <Navbar />
            <Stack sx={{ ...PAGE_WRAPPER_SX }}>
                {props.children}
                <DownArrow />
            </Stack>
            <Footer fontFamily={fontFamily} setFontFamily={setFontFamily} />
        </>
    )
}

export default PageWrapper