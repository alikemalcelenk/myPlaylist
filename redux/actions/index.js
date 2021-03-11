export const addToPlaylist = song => {
    return { type: 'ADD_TO_PLAYLIST', payload: song }
}

export const removeFromPlaylist = song => {
    return { type: 'REMOVE_FROM_PLAYLIST', payload: song }
}

export const getSongs = () => { //saga
    return { type: 'GET_SONGS' }
}

export const requestGetSongs = () => {
    return { type: 'REQUEST_GET_SONGS' }
}

export const requestGetSongsSuccess = () => {
    return { type: 'REQUEST_GET_SONGS_SUCCESS' }
}

export const requestGetSongsFailed = () => {
    return { type: 'REQUEST_GET_SONGS_FAILED' }
}
