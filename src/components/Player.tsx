import React from 'react';
import PlayerStore from '../stores/PlayerStore'

function Player(): JSX.Element {

    const playingPlatform = PlayerStore(state => state.playingPlatform)
    const playingId = PlayerStore(state => state.playingId)

    let player;
    if (playingPlatform === "Spotify") {
        player = <iframe
            src={"https://open.spotify.com/embed/track/" + playingId + "?utm_source=generator"}
            width="100%" height="80" frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
        </iframe>
    }

    return (<div>{player}</div>)

}

export default Player;
