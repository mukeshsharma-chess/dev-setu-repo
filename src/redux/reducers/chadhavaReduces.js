import { ADD_NEW_CHADHAVA_DATA_FAILED, ADD_NEW_CHADHAVA_DATA_RESPONSE, CHADHAVA_DATA_FAILED, CHADHAVA_DATA_RESPONSE } from "../types/chadhavaTypes"


const initialState = {
    allChadhava: null,
    chadhavaDetial: null,
}

export default function reducer(state = initialState, action) {
    switch (action.type) {

        case CHADHAVA_DATA_RESPONSE:
            return { ...state, allChadhava: action.isLoading }
        case CHADHAVA_DATA_FAILED:
            return { ...state, allChadhava: action.isLoading }

        case ADD_NEW_CHADHAVA_DATA_RESPONSE:
            return { ...state, chadhavaDetial: action.isLoading }
        case ADD_NEW_CHADHAVA_DATA_FAILED:
            return { ...state, chadhavaDetial: action.isLoading }

        default:
            return state
    }
}
