import React from 'react';
import PlayerStore from '../../stores/PlayerStore'

function SpotifyTrackPlayer(): JSX.Element {

    const playingId = PlayerStore(state => state.playingId)

    return (
        <iframe
            src={"https://open.spotify.com/embed/track/" + playingId + "?utm_source=generator"}
            width="100%" height="80" frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
        </iframe>
    )

}

export default SpotifyTrackPlayer;
