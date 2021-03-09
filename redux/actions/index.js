export const addToPlaylist = song => {
    return { type: 'ADD_TO_PLAYLIST', payload: song }
}

export const removeFromPlaylist = song => {
    return { type: 'REMOVE_FROM_PLAYLIST', payload: song }
}