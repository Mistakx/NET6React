import React from 'react';
import PlayerStore from '../stores/PlayerStore'
import YouTube from 'react-youtube';

function Player(): JSX.Element {

    const playingPlatform = PlayerStore(state => state.playingPlatform)
    const playingId = PlayerStore(state => state.playingId)


    const mouseClickEvents = ['mousedown', 'click', 'mouseup'];
    function simulateMouseClick(element: Element ){
        mouseClickEvents.forEach(mouseEventType =>
            element.dispatchEvent(
                new MouseEvent(mouseEventType, {
                    view: window,
                    bubbles: true,
                    cancelable: true,
                    buttons: 1
                })
            )
        );
    }

    let player;
    if (playingPlatform === "Spotify" && playingId) {

        player = <iframe
            src={"https://open.spotify.com/embed/track/" + playingId + "?utm_source=generator"}
            width="100%" height="80" frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
        </iframe>

        let element = document.querySelector('[title="Play"]');
        simulateMouseClick(element as Element);
    }
    else if (playingPlatform === "YouTube" && playingId) {

        const opts = {
            height: '390',
            width: '640',
            playerVars: {
                // https://developers.google.com/youtube/player_parameters
                autoplay: 1,
            },
        };
        // @ts-ignore
        player = <YouTube videoId={playingId} opts={opts}/>;
    }

    return (<div>{player}</div>)

}

export default Player;
