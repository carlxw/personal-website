// Sections
import Contact from "./pages/Contact";
import Experiences from "./pages/Experiences";
import PersonalProjects from "./pages/PersonalProjects";
import Hello from "./pages/Hello";
import Skills from "./pages/Skills";

// Components
import Navbar from "./components/Navbar";

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
