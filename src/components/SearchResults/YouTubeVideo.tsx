import React from 'react'
import PlayerStore from "../../stores/PlayerStore";
import {YouTubeVideoProperties} from "../../models/ComponentProperties/YouTubeVideoProperties";

function YouTubeVideo(props: YouTubeVideoProperties): JSX.Element {

    const setPlayingPlatform = PlayerStore(state => state.setPlayingPlatform)
    const setPlayingId = PlayerStore(state => state.setPlayingId)

    function playVideo() {
        setPlayingPlatform("YouTube")
        setPlayingId(props.video.id.videoId)
    }

    return (

        <li className="item" key={props.video.id.videoId} onClick={playVideo}>
            <div>{props.video.snippet.title}</div>
            <div>Channel title: {props.video.snippet.channelTitle}</div>
            <img alt="" height={200} width={200} src={props.video.snippet.thumbnails.high.url}/>
        </li>

    )
}

export default YouTubeVideo;