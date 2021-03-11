const initialState = {
    songs: [],
    playlist: [],
    isLoading: false,
    isError: false,
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_PLAYLIST':
            return { ...state, playlist: [...state.playlist, action.payload] }
        case 'REMOVE_FROM_PLAYLIST':
            state.playlist.splice(state.playlist.indexOf(action.payload), 1)
            return { ...state, playlist: [...state.playlist] };
        case 'REQUEST_GET_SONGS':
            return { ...state, isLoading: true, isError: false };
        case 'REQUEST_GET_SONGS_SUCCESS':
            console.log(action.songs)
            return { ...state, songs: action.songs, isLoading: false, isError: false };
        case 'REQUEST_GET_SONGS_FAILED':
            return { ...state, isLoading: false, isError: true };
        default:
            return state;
    }

}