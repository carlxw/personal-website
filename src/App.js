// Sections
import Homepage from "./pages/Homepage";
import PersonalProjects from "./pages/PersonalProjects";
import Error from "./pages/404";
import Mobile from "./pages/Mobile";
import Footer from "./components/Footer";

// Components
import Navbar from "./components/Navbar";

// Styling
import "./css/Reset.css";
import "./css/App.css";
import "./css/Background.css";
import "./css/Classes.css";
import "./css/PersonalProjects.css";
import "./css/Scrollbar.css";
import "./css/Navbar.css";
import "./css/Homepage.css";
import "./css/ProjCard.css";
import "./css/404.css";
import "./css/Mobile.css";
import "./css/Footer.css";
import "./css/Mobile.css";
import "react-tooltip/dist/react-tooltip.css";

// Animations
import "./css/Animations.css";

// Packages
import { HashRouter, Routes, Route } from "react-router-dom";
import { BrowserView, MobileView } from "react-device-detect";

function App() {
    return (
        <div>
            <BrowserView>
                <HashRouter>
                    <div id="app">
                        <Navbar />
                        <div className="content">
                            <Routes>
                                <Route path="/" element={ <Homepage /> } />
                                <Route path="/personal-website" element={ <Homepage />} />
                                <Route path="/personal_projects" element={ <PersonalProjects /> } />
                                <Route path="*" element={ <Error /> } />
                            </Routes>
                        </div>
                    </div>
                </HashRouter>
                <Footer />
            </BrowserView>
            
            <MobileView>
                <Mobile />
            </MobileView>
        </div>
    );
}

export default App;
