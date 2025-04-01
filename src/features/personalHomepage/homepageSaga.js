import { takeEvery, select, call, put, delay } from "redux-saga/effects";
import { fetchApiData } from "./Portfolio/fetchApiData";
import { sourceApiData } from "./Portfolio/sourceApiData";
import { saveThemeInLocalStorage } from "../../themeLocalStorage";
import { toggleTheme, selectTheme, fetchDataSuccess, fetchDataError } from "./homepageSlice";


function* saveThemeInLocalStorageHandler() {
    const darkTheme = yield select(selectTheme);
    yield call(saveThemeInLocalStorage, darkTheme)
}

function* fetchProjectsHandler() {
    try {
        yield delay(3000);
        const projects = yield fetchApiData(sourceApiData);
        yield put(fetchDataSuccess(projects));
    } catch (error) {
        yield put(fetchDataError())
        console.error("Oooops! Something went wrong...", error);
    }
}

export function* homepageSaga() {
    yield takeEvery(toggleTheme.type, saveThemeInLocalStorageHandler);
    yield call(fetchProjectsHandler);
}