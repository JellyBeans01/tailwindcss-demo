import LocalStorageKeyType, { LocalStorageSettingsType } from "./types/localStorage";
import { LOCAL_STORAGE_APP_SETTINGS } from "../constants";

export const localStorageGetSettings = (): LocalStorageSettingsType | null => {
    const data = localStorage.getItem(LOCAL_STORAGE_APP_SETTINGS);

    if (data) return JSON.parse(data);
    else return null;
};

export const localStorageSaveSetting = (key: LocalStorageKeyType, value: boolean | number | string): void => {
    const settings = localStorageGetSettings();

    if (settings) {
        localStorage.removeItem(LOCAL_STORAGE_APP_SETTINGS);
        localStorage.setItem(LOCAL_STORAGE_APP_SETTINGS, JSON.stringify({ ...settings, [key]: value }));
    } else {
        localStorage.setItem(LOCAL_STORAGE_APP_SETTINGS, JSON.stringify({ [key]: value }));
    }
};
