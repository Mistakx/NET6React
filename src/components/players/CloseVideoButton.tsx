import React from 'react';
import PlayerStore from '../../stores/PlayerStore'

function CloseVideoButton(): JSX.Element {

    const setPlayingId = PlayerStore(state => state.setPlayingId)
    const setPlayingThumbnailUrl = PlayerStore(state => state.setPlayingThumbnailUrl)
    const setPlayerCreator = PlayerStore(state => state.setPlayerCreator)

    function stopPlayingVideo() {
        setPlayingId(null)
        setPlayingThumbnailUrl(null)
        setPlayerCreator(null)
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
