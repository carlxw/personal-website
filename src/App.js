// Sections
import Contact from "./pages/sections_App/Contact";
import Experiences from "./pages/sections_App/Experiences";
import MyStory from "./pages/sections_App/MyStory";
import PersonalProjects from "./pages/sections_App/PersonalProjects";

// Components
import Navbar from "./components/Navbar";

// Styles
// import "./App.css";

// import { Router, Route, Routes } from "react-router";

function App() {
    return (
        <div className="app">
            <Navbar />
            <MyStory />
            <Experiences />
            <PersonalProjects />
            <Contact />
        </div>
    );
}

export default App;
