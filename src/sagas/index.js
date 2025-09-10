import { takeEvery, all, takeLatest } from 'redux-saga/effects';
import { addNewPujaSaga, deletePujaSaga, fetchAllPujaSaga, pujaDetialSaga, updatePujaSaga } from './pujaSaga';
import { ADD_NEW_PUJA_DATA_REQUEST, DELETE_PUJA_DATA_REQUEST, PUJA_DATA_REQUEST, PUJA_DETAILS_DATA_REQUEST, UPDATE_PUJA_DATA_REQUEST } from '@/redux/types/pujaTypes';

function* rootSaga() {
    yield all([
        takeLatest(PUJA_DATA_REQUEST, fetchAllPujaSaga),
        takeLatest(ADD_NEW_PUJA_DATA_REQUEST, addNewPujaSaga),
        takeLatest(PUJA_DETAILS_DATA_REQUEST, pujaDetialSaga),
        takeLatest(UPDATE_PUJA_DATA_REQUEST, updatePujaSaga),
        takeLatest(DELETE_PUJA_DATA_REQUEST, deletePujaSaga),
    ]);
}

export default rootSaga;