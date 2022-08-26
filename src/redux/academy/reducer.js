import { GET_ACADEMY_DATA } from "../constant";

export const academyRducer = (data=  [] , action) => {

    switch (action.type) {
        case GET_ACADEMY_DATA:
            // console.log(action)
            return [...action.data]
        default:
            return data;
    }
}