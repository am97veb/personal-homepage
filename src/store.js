import { configureStore } from "@reduxjs/toolkit";
import personalHomepageReducer from "./personalHomepageSlice";

export default configureStore({
    reducer: {
        personalHomepage: personalHomepageReducer,
    },
});