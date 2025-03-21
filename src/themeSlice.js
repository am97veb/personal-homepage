import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        darkMode: false,
    },
    reducers: {
        toggleTheme: (state) => {
            state.darkMode = !state.darkMode;
        },
    },
});

export const { toggleTheme } = themeSlice.actions;
export const selectTheme = (state) => state.theme.darkMode;
export default themeSlice.reducer;