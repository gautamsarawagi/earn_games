import {all} from 'redux-saga/effects';

import academySaga from "./academy/saga"
import gameSquareSaga from './gamesquare/saga';
import abProgramSaga from './ab-program/saga';
import faqSaga from './faqs/saga';

export default function* rootSaga(){
    yield all([
        academySaga(),
        gameSquareSaga(),
        abProgramSaga(),
        faqSaga(),
      ]);
}