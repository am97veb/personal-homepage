import { createSlice } from "./@reduxjs/toolkit";

const personalHomepageSlice = createSlice({
    name: 'theme',
    initialState: {
        darkTheme: false,
    },
    reducers: {
        toggleTheme: ({ darkTheme }) => {
            darkTheme = !darkTheme;
        },
    },
});

export const {toggleTheme} = tasksSlice.actions;
export const selectTheme = state => state.theme.darkTheme;
export default personalHomepageSlice.reducers;