import { localStorageSaveSetting } from "./localStorage";
import LocalStorageKeyType from "./types/localStorage";

export const toggleDarkMode = (darkModeEnabled: boolean) => {
    if (darkModeEnabled) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");

    localStorageSaveSetting(LocalStorageKeyType.DARK_MODE, darkModeEnabled);
};
