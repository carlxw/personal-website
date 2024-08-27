import Navbar from "./Navbar"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { Box, CssBaseline } from "@mui/material"
import Footer from "./Footer"
import DownArrow from "./DownArrow"
import { PropsWithChildren } from "react"
import React from "react"

const PageWrapper = (props: PropsWithChildren ) => {
    const theme = createTheme({
        typography: {
            fontFamily: "Open Sans"
        },
        components: {
            MuiButton: {
                styleOverrides: {
                    root: {
                        fontFamily: "Open Sans",
                    },
                },
            },
        },
    })
    
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Navbar />
            <Box sx={{ height: "90vh" }}>
                {props.children}
                {/* <DownArrow /> */}
            </Box>
            <Footer />
        </ThemeProvider>
    )
}

export default PageWrapper