const localStorageKay = "darkTheme";

export const saveThemeInLocalStorage = (darkTheme) => localStorage.setItem(localStorageKay, JSON.stringify(darkTheme));

export const getThemeFromLocalStorage = () => JSON.parse(localStorage.getItem(localStorageKay));