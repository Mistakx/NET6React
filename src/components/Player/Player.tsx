import React from 'react';
import PlayerStore from '../../stores/PlayerStore'
import YouTubePlayer from "./YouTubePlayer";
import SpotifyPlayer from "./SpotifyPlayer";
import VimeoPlayer from "./VimeoPlayer";
import TwitchClipPlayer from "./TwitchClipPlayer";


function Player(): JSX.Element {

    const playingPlatform = PlayerStore(state => state.playingPlatform)

    let player;

    if (playingPlatform === "YouTube") {
        player = <YouTubePlayer/>;
    } else if (playingPlatform === "Spotify") {
        player = <SpotifyPlayer/>
    } else if (playingPlatform === "Vimeo") {
        player = <VimeoPlayer/>;
    } else if (playingPlatform === "Twitch") {
        player = <TwitchClipPlayer/>;
    }

    return (<div id="Player"> {player} </div>)

}

export default Player;
