import { ADD_NEW_PUJA_DATA_FAILED, ADD_NEW_PUJA_DATA_RESPONSE, PUJA_DATA_RESPONSE, PUJA_DATA_FAILED } from "../types/pujaTypes"


const initialState = {
    allPuja: null,
    pujaDetial: null,
}

export default function reducer(state = initialState, action) {
    switch (action.type) {

        case PUJA_DATA_RESPONSE:
            return { ...state, allPuja: action.isLoading }
        case PUJA_DATA_FAILED:
            return { ...state, allPuja: action.isLoading }

        case ADD_NEW_PUJA_DATA_RESPONSE:
            return { ...state, pujaDetial: action.isLoading }
        case ADD_NEW_PUJA_DATA_FAILED:
            return { ...state, pujaDetial: action.isLoading }

        default:
            return state
    }
}
