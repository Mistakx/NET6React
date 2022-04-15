import React, {useEffect, useState} from 'react';
import PlayerStore from '../../stores/PlayerStore'

function SpotifyPlayer(): JSX.Element {

    const playingId = PlayerStore(state => state.playingId)

    const mouseClickEvents = ['mousedown', 'click', 'mouseup'];

    function simulateMouseClick(element: Element) {
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
        console.log("Simulated mouse click.")
    }

    /**
     * Simulates a click on the Spotify play button.
     */
    const [spotifyPlayerLoaded, setSpotifyPlayerLoaded] = useState(false)
    useEffect(() => {

        // Try to simulate a click every time the playing Id changes, but only if the player is loaded.
        if (spotifyPlayerLoaded) {

            let playerElement = document.getElementById("Player");
            if (playerElement) {
                simulateMouseClick(playerElement)
            } else {
                throw new Error("Player element not found.")
            }

        }

    }, [spotifyPlayerLoaded, playingId])

    return (
        <iframe
            src={"https://open.spotify.com/embed/track/" + playingId + "?utm_source=generator"}
            width="100%" height="80" frameBorder="0"
            onLoad={(_) => setSpotifyPlayerLoaded(true)}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
        </iframe>
    )

}

export default SpotifyPlayer;
