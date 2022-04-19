import React from 'react';
import PlayerStore from '../../stores/PlayerStore'
import ReactPlayer from "react-player";

function VimeoVideoPlayer(): JSX.Element {

    const playingId = PlayerStore(state => state.playingId)

    let vimeoVideoUrl = "https://player.vimeo.com/video/" + playingId

    return (<ReactPlayer url={vimeoVideoUrl} playing={true} controls={true} pip={true}/>)

}

export default VimeoVideoPlayer;
