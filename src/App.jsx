// Sections
import Homepage from "./pages/Homepage";
import PersonalProjects from "./pages/PersonalProjects";
import Error from "./pages/404";
import Footer from "./components/Footer";

// Components
import Navbar from "./components/Navbar";

// Styling
import "./css/Reset.css";
import "./css/App.css";
import "./css/Footer.css";
import "./css/Background.css";
import "./css/Classes.css";
import "./css/PersonalProjects.css";
import "./css/Scrollbar.css";
import "./css/Navbar.css";
import "./css/Homepage.css";
import "./css/ProjCard.css";
import "./css/Overlay.css";
import "./css/404.css";
import "./css/MaxWidth.css";
import "./css/Footer.css";
import "animate.css";
import "react-tooltip/dist/react-tooltip.css";

// Animations
import "./css/Animations.css";

// Packages
import { HashRouter, Routes, Route } from "react-router-dom";

// Personal Projects Overlay
import { Overlay } from "./components/Overlay";
import { useState } from "react";

function App() {
    const [data, setData] = useState({});

    return (
        <div>
            <HashRouter>
                <div id="app">
                    <Navbar />
                    <Routes>
                        <Route path="/" element={ <Homepage /> } />
                        <Route path="/personal-website" element={ <Homepage />} />
                        <Route path="/projects_hub" element={ <PersonalProjects setData={ setData }/> } />
                        <Route path="*" element={ <Error /> } />
                    </Routes>
                    <Footer />
                    { data && <Overlay data={ data } /> }
                </div>
            </HashRouter>
        </div>
    );
}

export default App;
