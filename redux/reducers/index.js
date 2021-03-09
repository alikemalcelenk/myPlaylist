import data from '../../data';

const initialState = {
    songs: data,
    playlist: []
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_PLAYLIST':
            return { ...state, playlist: [...state.playlist, action.payload] }
        case 'REMOVE_FROM_PLAYLIST':
            state.playlist.splice(state.playlist.indexOf(action.payload), 1)
            return { ...state, playlist: [...state.playlist] };
        default:
            return state;
    }

}