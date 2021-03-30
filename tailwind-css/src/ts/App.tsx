import { useEffect } from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import { localStorageGetSettings } from "./resources/localStorage";
import { toggleDarkMode } from "./resources/utils";

function App() {
    useEffect(() => {
        const settings = localStorageGetSettings();
        if (settings) {
            const { darkModeEnabled } = settings;
            toggleDarkMode(darkModeEnabled);
        }
    }, []);

    return (
        <div className="flex flex-col flex-wrap justify-between min-h-screen">
            <Header />
            <Home />
            <Footer />
        </div>
    );
}

export default App;
