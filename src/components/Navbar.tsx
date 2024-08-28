import { Link } from "react-router-dom"
import { useState, useEffect, useMemo } from "react"
import { useLocation } from "react-router-dom"
import React from "react"
import { AppBar, Divider, Stack, SxProps, Toolbar, Typography } from "@mui/material"

const NAVBAR_SX: SxProps = { 
    backgroundColor: "inherit", 
    boxShadow: "none", 
    height: "7vh",
}

const NAVBAR_LINK_SX: SxProps = {
    fontSize: "20px",
}

const ACTIVE_SX = { 
    borderBottom: "2px white solid" 
}

const Navbar = () => {
    const url = useLocation()
    const [home, setHome] = useState<boolean>(false)
    const [proj, setProj] = useState<boolean>(false)
    const NAVIGATION_PAGES = useMemo(() => [setHome, setProj], [])
    
    // Detect when the user changes URL
    useEffect(() => {
        NAVIGATION_PAGES.forEach(x => x(false))
        if (url.pathname === "/projects_hub") {
            setProj(true)
        } else {
            setHome(true)
        }
    }, [url, NAVIGATION_PAGES])

    const navbarLinks = [
        { buttonTitle: "Home", to: "/", sxChecker: home },
        { buttonTitle: "Personal Projects", to: "/projects_hub", sxChecker: proj },
    ]

    return (
        <AppBar position="static" sx={{ ...NAVBAR_SX }}>
            <Toolbar sx={{ mr: 1 }}>
                <Typography variant="h4" sx={{ flexGrow: 1, fontWeight: "bold" }}>Carl Wang</Typography>
                <Stack direction="row" gap={7}>
                    {
                        navbarLinks.map((config, i) => (
                            <Link key={`navbar_element_${i}`} className="hover_increase_small" style={ config.sxChecker ? ACTIVE_SX : {} } to={config.to}>
                                <Typography sx={{ ...NAVBAR_LINK_SX }}>{config.buttonTitle}</Typography>
                            </Link>
                        ))
                    }
                </Stack>
            </Toolbar>
            <Divider sx={{ bgcolor: "white", height: 4 }} />
        </AppBar>
    )
}

export default Navbar
