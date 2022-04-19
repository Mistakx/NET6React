import React from 'react'
import PlayerStore from "../../stores/PlayerStore";
import {VimeoVideoProperties} from "../../models/ComponentProperties/VimeoVideoProperties";

function VimeoVideo(props: VimeoVideoProperties): JSX.Element {

    const setPlayingType = PlayerStore(state => state.setPlayingType)
    const setPlayingId = PlayerStore(state => state.setPlayingId)

    const videoId = props.video.uri.split("/videos/")[1]

    function playVideo() {
        setPlayingType("VimeoVideo")
        setPlayingId(videoId)
    }

    return (

        <li className="item" key={videoId} onClick={playVideo}>
            <div>{props.video.name}</div>
            <div>Channel title: {props.video.user.name}</div>
            <img alt="" height={200} width={200} src={props.video.pictures.base_link}/>

            {/*<img alt="" height={200} width={200} src={props.video.snippet.thumbnails.high.url}/>*/}
        </li>

    )
}

export default VimeoVideo;