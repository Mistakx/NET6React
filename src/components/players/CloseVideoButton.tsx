import React from 'react';
import GlobalPlayerStore from '../../stores/GlobalPlayerStore'

function CloseVideoButton(): JSX.Element {

    const setPlayingGenericResult = GlobalPlayerStore(state => state.setPlayingGenericResult)

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
