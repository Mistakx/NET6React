import React, {useEffect, useState} from 'react';
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
        <button className="btn btn-link"
                onClick={() => {
                    stopPlayingVideo()
                }}>
            <i
                style={{backgroundColor: "rgb(255, 255, 255, 0.3)"}}
                className='bx bx-x'>
            </i>
        </button>
    )
}

export default CloseVideoButton;
