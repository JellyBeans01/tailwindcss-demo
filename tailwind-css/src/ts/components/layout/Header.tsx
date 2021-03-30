import { useState } from "react";
import ReactSwitch from "react-switch";
import MenuLink from "../MenuLink";
import Logout from "../Logout";
import { toggleDarkMode } from "../../resources/utils";
import { localStorageGetSettings } from "../../resources/localStorage";

const Header = () => {
    const settings = localStorageGetSettings();

    // State
    const [activeRoute, setActiveRoute] = useState<number>(0);
    const [isDarkMode, setIsDarkMode] = useState<boolean>(settings ? settings.darkModeEnabled : false);

    // Evt Handlers
    const onPressToggle = () => {
        toggleDarkMode(!isDarkMode);
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div className="bg-primaryLight flex flex-col justify-center dark:bg-dmPrimary">
            <div className="flex flex-wrap flex-row justify-end">
                <div className="flex flex-col flex-wrap justify-center mr-20">
                    <ReactSwitch
                        checked={isDarkMode}
                        onChange={onPressToggle}
                        offColor="#424242"
                        onColor="#38bdf8"
                        uncheckedIcon={false}
                        checkedIcon={false}
                    />
                </div>
                <MenuLink label="Home" isActive={activeRoute === 0} onClick={() => setActiveRoute(0)} />
                <MenuLink label="Item 1" isActive={activeRoute === 1} onClick={() => setActiveRoute(1)} />
                <MenuLink label="Item 2" isActive={activeRoute === 2} onClick={() => setActiveRoute(2)} />
                <MenuLink label="Item 3" isActive={activeRoute === 3} onClick={() => setActiveRoute(3)} />
                <Logout />
            </div>
        </div>
    );
};

export default Header;
