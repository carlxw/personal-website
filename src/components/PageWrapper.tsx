import Navbar from "./Navbar"
import { Stack } from "@mui/material"
import Footer from "./Footer"
import { Dispatch, PropsWithChildren, SetStateAction } from "react"
import React from "react"
import DownArrow from "./DownArrow"
import { FontOptions } from "../App"

export const STACK_CENTRE = { justifyContent: "center", alignItems: "center" }

const PAGE_WRAPPER_SX = { 
    height: "93vh", 
    ...STACK_CENTRE,
}

export type FontSetter = { fontFamily: FontOptions, setFontFamily: Dispatch<SetStateAction<FontOptions>> }

const PageWrapper = (props: PropsWithChildren & FontSetter) => {
    const { fontFamily, setFontFamily } = props

    return (
        <>
            <Navbar />
            <Stack sx={{ height: "93vh" }} className="hide_horizontal_scrollbar">
                <Stack sx={{ height: "86vh", ...STACK_CENTRE }}>
                    {props.children}
                </Stack>
                <Stack sx={{ height: "5vh", ...STACK_CENTRE }}>
                    <DownArrow />
                </Stack>
            </Stack>
            <Footer fontFamily={fontFamily} setFontFamily={setFontFamily} />
        </>
    )
}

export default PageWrapper