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
        <button
            onClick={
                () => {
                    stopPlayingVideo()
                    console.log('clicked')
                }
            }
            onTouchEnd={
                () => {
                    stopPlayingVideo()
                }
            }
        >

            <i className='bx bx-x bx-sm closeButton clickable'> </i>
        </button>
    )
}

export default CloseVideoButton;
