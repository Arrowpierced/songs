import { combineReducers } from 'redux'

const songsReducer = () => {
    return [
        {title: 'Vienna', duration: '3:34' },
        {title: 'Black Magic Woman', duration: '2:48'},
        {title: `I'll Make a Man Out of You`, duration: '3: 21'},
        {title: `I Will Always Love You`, duration: '2:54'}
    ]
}

const selectedSongReducer = (selectedSong=null, action) => {
    if (action.type === 'SONG_SELECTED'){
        return action.payload
    }

    return selectedSong
}

export default combineReducers ({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})