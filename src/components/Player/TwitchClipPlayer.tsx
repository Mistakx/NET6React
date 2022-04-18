import React from 'react';
import PlayerStore from '../../stores/PlayerStore'
import ReactPlayer from "react-player";

function TwitchClipPlayer(): JSX.Element {

    const playingId = PlayerStore(state => state.playingId)

    let twitchClipUrl = "https://clips.twitch.tv/embed?clip="
    let parent = "&parent=localhost"
    return (
        <iframe
            src={twitchClipUrl + playingId + parent + "&autoplay=true"}
            frameBorder={0}
            allowFullScreen={true}
            scrolling={"no"}
            height={378}
            width={620}/>
    )

}

export default TwitchClipPlayer;
