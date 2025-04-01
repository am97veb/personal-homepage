const localStorageKay = "darkMode";

export const saveThemeInLocalStorage = (darkMode) => 
    localStorage.setItem(localStorageKay, JSON.stringify(darkMode));

export const getThemeFromLocalStorage = () => 
    JSON.parse(localStorage.getItem(localStorageKay));