// Sections
import Homepage from "./pages/Homepage"
import PersonalProjects from "./pages/PersonalProjects"
import Error from "./pages/404"

// Components
import PageWrapper, { FontSetter } from "./components/PageWrapper"

// Styling
import "./css/Reset.css"
import "./css/App.css"
import "animate.css"
import "./css/Background.css"
import "./css/Classes.css"
import "./css/Overlay.css"
// import "./css/Footer.css"
// import "./css/PersonalProjects.css"
// import "./css/Scrollbar.css"
// import "./css/Navbar.css"
// import "./css/Homepage.css"
// import "./css/ProjCard.css"
// import "./css/404.css"
// import "./css/MaxWidth.css"
// import "./css/Footer.css"
// import "react-tooltip/dist/react-tooltip.css"

// Animations
import "./css/Animations.css"

// Packages
import { HashRouter, Routes, Route } from "react-router-dom"

// Personal Projects Overlay
import { Overlay } from "./components/Overlay"
import { useMemo, useState } from "react"
import React from "react"
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material"

export type FontOptions = "Open Sans" | "Inconsolata"

const App = () => {
    const [ data, setData ] = useState<Object>({})
    const [ fontFamily, setFontFamily ] = useState<FontOptions>("Open Sans")
    const fontSetter = { fontFamily, setFontFamily }

    const theme = useMemo(() => createTheme({
        typography: {
            fontFamily: fontFamily,
            allVariants: {
                color: "white",
            },
        },
    }), [fontFamily])
    
    const APP_CONFIG = [
        { path: "/", element: <HomePageAppWrapper {...fontSetter} /> },
        { path: "/personal_website", element: <HomePageAppWrapper {...fontSetter} /> },
        { path: "/projects_hub", element: <PersonalProjectsAppWrapper setData={setData} {...fontSetter} /> },
        { path: "/*", element: <ErrorAppWrapper {...fontSetter} /> },
    ]
    
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <HashRouter>
                <div id="app">
                    <Routes>
                        {
                            APP_CONFIG.map(config => (
                                <Route {...config} />
                            ))
                        }
                    </Routes>
                    { data && <Overlay data={ data } /> }
                </div>
            </HashRouter>
        </ThemeProvider>
    )
}

const HomePageAppWrapper = (props: FontSetter) => {
    return (
        <PageWrapper {...props}>
            <Homepage />
        </PageWrapper>
    )
}

const PersonalProjectsAppWrapper = (props: FontSetter & { setData: Function }) => {
    return (
        <PageWrapper {...props}>
            <PersonalProjects {...props} />
        </PageWrapper>
    )
}

const ErrorAppWrapper = (props: FontSetter) => {
    return (
        <PageWrapper {...props}>
            <Error />
        </PageWrapper>
    )
}

export default App
