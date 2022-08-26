import { FETCH_ACADEMY_DATA,GET_ACADEMY_DATA } from "../constant";
import {takeEvery,put} from "redux-saga/effects";

function* getAcademyData(){
    let data = yield fetch(' http://localhost:3500/academy_data');
    data = yield data.json();
    // console.warn("action is called", data)
    yield put({type: GET_ACADEMY_DATA, data})
}

function* academySaga(){
    yield takeEvery(FETCH_ACADEMY_DATA, getAcademyData)
}

export default academySaga;