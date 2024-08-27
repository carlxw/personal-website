import Navbar from "./Navbar"
import { Box } from "@mui/material"
import Footer from "./Footer"
import DownArrow from "./DownArrow"

const PageWrapper = (props ) => {
   
    return (
        <>
            <Navbar height={"10vh"} />
            <Box sx={{ height: "90vh" }}>
                {props.children}
                <DownArrow />
            </Box>
            <Footer />
        </>
    )
}

export default PageWrapper