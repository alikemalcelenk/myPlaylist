import { put, takeEvery } from 'redux-saga/effects'

function* test(action) {
    console.log('SAGA LIVE')
    console.log(action.payload)
    yield put({ type: 'ADD_TO_PLAYLIST_TEST', payload: action.payload });
}

function* mySaga() {
    yield takeEvery('ADD_TO_PLAYLIST', test);
}

export default mySaga;