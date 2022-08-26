import { GET_GAMESQUARE_DATA } from "../constant";

export const gamesquareReducer = (data=  [] , action) => {
    switch (action.type) {
        case GET_GAMESQUARE_DATA:
            // console.log(action)
            return [...action.data]
        default:
            return data;
    }
}
