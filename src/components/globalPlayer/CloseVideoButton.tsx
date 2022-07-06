import React from 'react';
import GlobalPlayerStore from '../../stores/players/GlobalPlayerStore';

function CloseVideoButton(): JSX.Element {

    const setGlobalPlayerCurrentResult = GlobalPlayerStore(state => state.setGlobalPlayerCurrentResult)
    const setSearchCurrentResults = GlobalPlayerStore(state => state.setSearchCurrentResults)

    function stopPlayingVideo() {
        setGlobalPlayerCurrentResult(null)
        setSearchCurrentResults(null)
    }

    return (
        <i
            className='bx bx-x bx-sm closeButton clickable'
            onClick={() => {
                stopPlayingVideo()
            }}>
        </i>
    )
}

export default CloseVideoButton;
