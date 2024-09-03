import { SiGithub, SiGmail, SiLinkedin, SiYoutube } from "react-icons/si"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import Copyright from "./Copyright"
import React from "react"
import { BoxProps, Button, Link, Stack, StackProps } from "@mui/material"
import { FontOptions } from "../App"

const COMMON_SX = { color: "white", '&.MuiButton-root:hover': { bgcolor: 'transparent' } }
const COPYRIGHT_SX = { fontSize: "28px", fontFamily: "Open Sans", ...COMMON_SX }
const FONT_TOGGLE_SX = { fontSize: "1.5rem", fontFamily: "Inconsolata", textAlign: "right", ...COMMON_SX}

type FooterProps = {
    fontFamily: FontOptions,
    setFontFamily: Dispatch<SetStateAction<FontOptions>>
}

const Footer = (props: FooterProps) => {
    const { fontFamily, setFontFamily } = props
    const [showCopyright, toggleCopyright] = useState<boolean>(false)
    const url = useLocation()

    // Whenever the URL changes, auto-hide the copyright in the footer
    useEffect(() => {
        toggleCopyright(false)
    }, [url])

    const toggleFont = () => {
        if (fontFamily === "Open Sans") {
            setFontFamily("Inconsolata")
        } else {
            setFontFamily("Open Sans")
        }
    }

    const copyrightOnClick = () => {
        toggleCopyright(!showCopyright)
        
        // Scroll to bottom of page
        setTimeout(() => {
            window.scrollTo( {
                top: document.body.scrollHeight,
                behavior: "smooth"
            })
        }, 50)
    }

    const footerIcons = [
        { href: "https://linkedin.ca/in/carlxwang", icon: SiLinkedin },
        { href: "mailto: cx2wang@uwaterloo.ca", icon: SiGmail },
        { href: "https://www.github.com/carlxw", icon: SiGithub },
        { href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", icon: SiYoutube },
    ]

    const BOX_CONFIG: BoxProps & { target: string, href?: string } = {
        className: "hover_increase",
        target: "_blank",
        sx: { color: "white", fontFamily: "Open Sans" },
    }

    const FOOTER_CONFIG: StackProps = {
        direction: "row",
        sx: { height: "10vh", ml: 3.5, mr: 3.5 },
        justifyContent: "center",
        alignItems: "center",
    }

    return (
        <>
            <Stack {...FOOTER_CONFIG}>
                <Stack sx={{mr: "auto"}}>
                    <Button sx={{...COPYRIGHT_SX}} onClick={copyrightOnClick} disableRipple>
                        ©
                    </Button>
                </Stack>

                <Stack direction="row" gap={15} alignSelf="center">
                    {
                        footerIcons.map(config => (
                            <Link component="a" { ...BOX_CONFIG } href={config.href}>
                                <config.icon size={30} />
                            </Link>
                        ))
                    }
                </Stack>      
                
                <Stack sx={{ml: "auto"}}>
                    <Button sx={{...FONT_TOGGLE_SX}} onClick={toggleFont} disableRipple>
                        !()
                    </Button>
                </Stack>
            </Stack>
            { showCopyright && <Copyright /> }
        </>
    )
}

export default Footer