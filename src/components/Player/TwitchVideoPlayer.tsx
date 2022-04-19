import React from 'react';
import PlayerStore from '../../stores/PlayerStore'
import ReactPlayer from 'react-player'

function TwitchVideoPlayer(): JSX.Element {

    const playingId = PlayerStore(state => state.playingId)

    let twitchVideoUrl = "https://www.twitch.tv/videos/" + playingId

    return (<ReactPlayer url={twitchVideoUrl} playing={true} controls={true} pip={true}/>)

}

export default TwitchVideoPlayer;
