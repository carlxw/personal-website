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

function App() {
    return (
        <div className="app">
            <Navbar />
                <div className="webpage">
                    <Hello className="snap_child" />
                    <Skills className="snap_child" />
                    <Experiences className="snap_child" />
                    <PersonalProjects className="snap_child" />
                    <Contact className="snap_child" />
                </div>
        </div>
    );
}

export default App;
