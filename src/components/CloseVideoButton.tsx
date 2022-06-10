import React from 'react';
import GlobalPlayerStore from '../stores/GlobalPlayerStore'

function CloseVideoButton(): JSX.Element {

    const setGlobalPlayerCurrentResult = GlobalPlayerStore(state => state.setGlobalPlayerCurrentResult)

    function stopPlayingVideo() {
        setGlobalPlayerCurrentResult(null)
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
