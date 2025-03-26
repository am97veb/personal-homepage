import { createSlice } from "@reduxjs/toolkit";
import { getThemeFromLocalStorage } from "./themeLocalStorage";

const homepageSlice = createSlice({
    name: 'homepage',
    initialState: {
        darkMode: getThemeFromLocalStorage(),
        projacts: [],
        downloads: "loading",
    },
    reducers: {
        toggleTheme: (state) => {
            state.darkMode = !state.darkMode;
        },
        fetchDataSuccess: (state, {payload:projectsData}) => {
            state.downloads = "success";
            state.projects = projectsData;
        },
        fetchDataError: (state) => {
            state.downloads = "error";
        },
    },
});

export const { toggleTheme, fetchDataSuccess, fetchDataError } = homepageSlice.actions;
export const selectTheme = (state) => state.homepage.darkMode;
export const selectProjects = (state) => state.homepage.projects;
export const selectDownloads = (state) => state.homepage.downloads;
export default homepageSlice.reducer;