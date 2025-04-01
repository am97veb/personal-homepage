import { configureStore } from "@reduxjs/toolkit";
import homepageReducer from "./features/personalHomepage/homepageSlice";
import createSagaMiddleware from "redux-saga";
import { homepageSaga } from "./features/personalHomepage/homepageSaga";

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
    reducer: {
        homepage: homepageReducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(homepageSaga);