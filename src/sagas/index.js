import { takeEvery, all, takeLatest } from 'redux-saga/effects';

function* rootSaga() {
    yield all([
        // takeLatest(BSG_USER_LOGIN, bsgUserLoginSaga),
        // takeEvery(NONBSG_USER_LOGIN, nonBsgUserLoginSaga),
        
    ]);
}

export default rootSaga;