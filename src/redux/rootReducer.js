import { combineReducers} from "redux";

import { academyRducer } from "./academy/reducer";
import { gamesquareReducer } from "./gamesquare/reducer";
import { abProgramReducer } from "./ab-program/reducer";

export default combineReducers({
    academyRducer,
    gamesquareReducer,
    abProgramReducer,
})