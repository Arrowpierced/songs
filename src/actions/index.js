//Action creator

export const selectSong = (song) => {
    //return an action object
    return {
        //type required
        type: 'SONG_SELECTED',
        payload: song
    }
}

