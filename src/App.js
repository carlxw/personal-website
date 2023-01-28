// Sections
import Contact from "./pages/sections_App/Contact";
import Experiences from "./pages/sections_App/Experiences";
import PersonalProjects from "./pages/sections_App/PersonalProjects";
import Hello from "./pages/sections_App/Hello";
import Skills from "./pages/sections_App/Skills";

// Components
import Navbar from "./components/Navbar";

// Styles
import "./App.css";

// import { Router, Route, Routes } from "react-router";

function App() {
    return (
        <div className="app">
            <Navbar />
                <div className="webpage">
                    <Hello />
                    <Skills />
                    <Experiences />
                    <PersonalProjects />
                    <Contact />
                </div>
        </div>
    );
}

export default App;
