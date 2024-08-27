// Sections
import Homepage from "./pages/Homepage";
import PersonalProjects from "./pages/PersonalProjects";
import Error from "./pages/404";

// Components
import PageWrapper from "./components/PageWrapper";

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

const App = () => {
    const [data, setData] = useState({});
    const APP_CONFIG = [
        { path: "/", element: <HomePageAppWrapper /> },
        { path: "/personal_website", element: <HomePageAppWrapper /> },
        { path: "/projects_hub", element: <PersonalProjectsAppWrapper setData={setData} /> },
        { path: "/*", element: <ErrorAppWrapper /> },
    ]
    
    return (
        <HashRouter>
            <div id="app">
                <Routes>
                    {
                        APP_CONFIG.map(config => (
                            <Route {...config} />
                        ))
                    }
                </Routes>
                { data && <Overlay data={ data } /> }
            </div>
        </HashRouter>
    );
}

const HomePageAppWrapper = () => {
    return (
        <PageWrapper>
            <Homepage />
        </PageWrapper>
    )
}

const PersonalProjectsAppWrapper = (props) => {
    return (
        <PageWrapper>
            <PersonalProjects {...props} />
        </PageWrapper>
    )
}

const ErrorAppWrapper = () => {
    return (
        <PageWrapper>
            <Error />
        </PageWrapper>
    )
}

export default App;
