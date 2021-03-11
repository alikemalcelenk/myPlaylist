import { put, takeEvery, call } from 'redux-saga/effects';
import axios from 'axios';

function* getSongs() {
    try {
        yield put({ type: 'REQUEST_GET_SONGS' });
        const songs = yield call(() => {
            return axios.get('https://artwollectapi.herokuapp.com/app/web/myPlaylistSongs')
        });
        yield put({ type: 'REQUEST_GET_SONGS_SUCCESS', songs: songs.data.data });
    } catch (error) {
        yield put({ type: 'REQUEST_GET_SONGS_FAILED' });
    }
}

//watch
function* mySaga() {
    yield takeEvery('GET_SONGS', getSongs);
}

export default mySaga;