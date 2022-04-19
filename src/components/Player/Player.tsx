import React from 'react';
import PlayerStore from '../../stores/PlayerStore'
import YouTubeVideoPlayer from "./YouTubeVideoPlayer";
import SpotifyTrackPlayer from "./SpotifyTrackPlayer";
import VimeoVideoPlayer from "./VimeoVideoPlayer";
import TwitchClipPlayer from "./TwitchClipPlayer";
import TwitchVideoPlayer from "./TwitchVideoPlayer";
import TwitchLivePlayer from "./TwitchLivePlayer";


function Player(): JSX.Element {

    const playingType = PlayerStore(state => state.playingType)

    let player;

    if (playingType === "YouTubeVideo") {
        player = <YouTubeVideoPlayer/>;
    } else if (playingType === "SpotifyTrack") {
        player = <SpotifyTrackPlayer/>
    } else if (playingType === "VimeoVideo") {
        player = <VimeoVideoPlayer/>;
    } else if (playingType === "TwitchClip") {
        player = <TwitchClipPlayer/>;
    } else if (playingType === "TwitchVideo") {
        player = <TwitchVideoPlayer/>;
    } else if (playingType === "TwitchLive") {
        player = <TwitchLivePlayer/>;
    }

    return (<div id="Player"> {player} </div>)

}

export default Player;
