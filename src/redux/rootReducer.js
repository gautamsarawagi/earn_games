import { combineReducers} from "redux";

import { academyRducer } from "./academy/reducer";
import { gamesquareReducer } from "./gamesquare/reducer";

export default combineReducers({
    academyRducer,
    gamesquareReducer
})