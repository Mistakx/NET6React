import React from 'react';
import PlayerStore from '../../stores/PlayerStore'

function CloseVideoButton(): JSX.Element {

    const setPlayingGenericResult = PlayerStore(state => state.setPlayingGenericResult)

    function stopPlayingVideo() {
        setPlayingGenericResult(null)
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
