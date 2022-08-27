import { GET_AB_DATA } from "../constant";

export const abProgramReducer = (data=  [] , action) => {

    switch (action.type) {
        case GET_AB_DATA:
            console.log(action)
            return [...action.data]
        default:
            return data;
    }
}