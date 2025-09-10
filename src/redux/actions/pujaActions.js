import { ADD_NEW_PUJA_DATA_REQUEST, PUJA_DATA_REQUEST } from "../types/pujaTypes"




export const requestPujaDataAction = (date) => ({
    type: PUJA_DATA_REQUEST,
    payload: data
})

export const addNewPujaDataAction = (data) => ({
    type: ADD_NEW_PUJA_DATA_REQUEST,
    payload: data
})
