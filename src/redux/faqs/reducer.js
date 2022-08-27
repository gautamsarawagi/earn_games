import { GET_FAQ_DATA } from "../constant";

export const faqReducer = (data=  [] , action) => {

    switch (action.type) {
        case GET_FAQ_DATA:
            console.log(action)
            return [...action.data]
        default:
            return data;
    }
}