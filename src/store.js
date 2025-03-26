import { configureStore } from "@reduxjs/toolkit";
import homepageReducer from "./homepageSlice";
import createSagaMiddleware from "redux-saga";
import { homepageSaga } from "./personalHompageSaga";

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
    reducer: {
        homepage: homepageReducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(homepageSaga);