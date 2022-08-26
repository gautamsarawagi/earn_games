import {takeEvery,put} from "redux-saga/effects";
import {FETCH_GAMESQUARE_DATA,GET_GAMESQUARE_DATA} from "../constant"

function* getGamesquaredata(){
    let data = yield fetch('http://localhost:3500/featured-game-data');
    data = yield data.json();
    console.warn("action is called", data)
    yield put({type: GET_GAMESQUARE_DATA, data})
}

function* gameSquareSaga(){
    yield takeEvery(FETCH_GAMESQUARE_DATA, getGamesquaredata)
}

export default gameSquareSaga;