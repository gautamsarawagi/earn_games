import {takeEvery,put} from "redux-saga/effects";
import {FETCH_FAQ_DATA,GET_FAQ_DATA} from "../constant"

function* getfaqData(){
    let data = yield fetch('http://localhost:3500/questions');
    data = yield data.json();
    console.warn("action is called", data)
    yield put({type: GET_FAQ_DATA, data})
}

function* faqSaga(){
    yield takeEvery(FETCH_FAQ_DATA,getfaqData) 
}

export default faqSaga;