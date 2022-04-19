import React from 'react';
import PlayerStore from '../../stores/PlayerStore'
import ReactPlayer from 'react-player'

function TwitchLivePlayer(): JSX.Element {

    const playingId = PlayerStore(state => state.playingId)

    let twitchVideoUrl = "https://www.twitch.tv/" + playingId

    return (<ReactPlayer url={twitchVideoUrl} playing={true} controls={true} pip={true}/>)

}

export default TwitchLivePlayer;
