import React from 'react';
import PlayerStore from '../../stores/PlayerStore'
import ReactPlayer from 'react-player'

function YouTubeVideoPlayer(): JSX.Element {

    const playingId = PlayerStore(state => state.playingId)

    let youtubeVideoUrl = "https://www.youtube.com/watch?v=" + playingId

    return (<ReactPlayer url={youtubeVideoUrl} playing={true} controls={true} pip={true}/>)

}

export default YouTubeVideoPlayer;
