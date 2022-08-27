import { FETCH_AB_DATA,GET_AB_DATA } from "../constant";
import {takeEvery,put} from "redux-saga/effects";

function* getAbProgramData (){
    let data = yield fetch(' http://localhost:3500/abassadors-program-data');
    data = yield data.json();
    console.warn("action is called", data)
    yield put({type: GET_AB_DATA, data})
}

function* abProgramSaga(){
    yield takeEvery(FETCH_AB_DATA, getAbProgramData);
}

export default abProgramSaga;