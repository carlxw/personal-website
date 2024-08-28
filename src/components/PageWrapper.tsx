import Navbar from "./Navbar"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { CssBaseline, Stack } from "@mui/material"
import Footer from "./Footer"
import { PropsWithChildren, useMemo, useState } from "react"
import React from "react"
import DownArrow from "./DownArrow"

export type FontOptions = "Open Sans" | "Inconsolata"

const PAGE_WRAPPER_SX = { 
    height: "93vh", 
    justifyContent: "center", 
    alignItems: "center",
}

const PageWrapper = (props: PropsWithChildren ) => {
    const [ fontFamily, setFontFamily ] = useState<FontOptions>("Open Sans")

    const theme = useMemo(() => createTheme({
        typography: {
            fontFamily: fontFamily,
            allVariants: {
                color: "white",
            },
        },
    }), [fontFamily])
    
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Navbar />
            <Stack sx={{ ...PAGE_WRAPPER_SX }}>
                {props.children}
                <DownArrow />
            </Stack>
            <Footer fontFamily={fontFamily} setFontFamily={setFontFamily} />
        </ThemeProvider>
    )
}

export default PageWrapper