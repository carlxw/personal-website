import Navbar from "./Navbar"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { Box, CssBaseline } from "@mui/material"
import Footer from "./Footer"
import DownArrow from "./DownArrow"
import { PropsWithChildren, useMemo, useState } from "react"
import React from "react"

export type FontOptions = "Open Sans" | "Inconsolata"

const PageWrapper = (props: PropsWithChildren ) => {
    const [ fontFamily, setFontFamily ] = useState<FontOptions>("Open Sans")

    const theme = useMemo(() => createTheme({
        typography: {
            fontFamily: fontFamily,
        },
    }), [fontFamily])
    
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Navbar />
            <Box sx={{ height: "90vh" }}>
                {props.children}
                {/* <DownArrow /> */}
            </Box>
            <Footer fontFamily={fontFamily} setFontFamily={setFontFamily} />
        </ThemeProvider>
    )
}

export default PageWrapper