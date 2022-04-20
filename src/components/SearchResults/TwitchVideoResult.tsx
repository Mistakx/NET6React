import React from 'react'
import PlayerStore from "../../stores/PlayerStore";
import {TwitchClipProperties} from "../../models/ComponentProperties/TwitchClipProperties";
import {TwitchVideoProperties} from "../../models/ComponentProperties/TwitchVideoProperties";

function TwitchVideoResult(props: TwitchVideoProperties): JSX.Element {

    const setPlayingType = PlayerStore(state => state.setPlayingType)
    const setPlayingId = PlayerStore(state => state.setPlayingId)

    function playClip() {
        setPlayingType("TwitchVideoResult")
        setPlayingId(props.video.id)
    }

    return (

        <li className="item" key={props.video.id} onClick={playClip}>
            <div>{props.video.title}</div>
            <div>Channel title: {props.video.user_name}</div>
            <img alt="" height={200} width={200} src={props.video.thumbnail_url.replace("%{width}", "400").replace("%{height}", "400")}/>
        </li>

    )
}

export default TwitchVideoResult;