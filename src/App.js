// Sections
import Hello from "./pages/Hello";
import Skills from "./pages/Skills";
import WorkExperiences from "./pages/WorkExperiences";
import PersonalProjects from "./pages/PersonalProjects";
import Contact from "./pages/Contact";
import Error from "./pages/404";
import Mobile from "./pages/Mobile";

// Components
import Navbar from "./components/Navbar";

// Styling
import "./css/Reset.css";
import "react-tooltip/dist/react-tooltip.css"
import "./css/App.css";
import "./css/Classes.css";
import "./css/Navbar.css";
import "./css/Homepage.css";
import "./css/Skills.css";
import "./css/WorkExp.css";
import "./css/PersonalProj.css";
import "./css/Contact.css";
import "./css/404.css";

// Packages
import { HashRouter, Routes, Route } from "react-router-dom";
import { BrowserView, MobileView } from "react-device-detect";

function App() {
    return (
        <div>
            <BrowserView>
                <HashRouter>
                    <div className="app">
                        <Navbar />
                        <div className="content">
                            <Routes>
                                <Route path="/" element={ <Hello /> } />
                                <Route path="/personal-website" element={ <Hello />} />
                                <Route path="/skills" element={ <Skills /> } />
                                <Route path="/work_experiences" element={ <WorkExperiences /> } />
                                <Route path="/personal_projects" element={ <PersonalProjects /> } />
                                <Route path="/contact" element={ <Contact /> } />
                                <Route path="*" element={ <Error /> } />
                            </Routes>
                        </div>
                    </div>
                </HashRouter>
            </BrowserView>
            <MobileView>
                <Mobile />
            </MobileView>
        </div>
    );
}

export default App;
