import React from 'react'
import PlayerStore from "../../stores/PlayerStore";
import {TwitchClipProperties} from "../../models/ComponentProperties/TwitchClipProperties";

function TwitchClip(props: TwitchClipProperties): JSX.Element {

    const setPlayingPlatform = PlayerStore(state => state.setPlayingPlatform)
    const setPlayingId = PlayerStore(state => state.setPlayingId)

    function playClip() {
        setPlayingPlatform("Twitch")
        setPlayingId(props.clip.id)
    }

    return (

        <li className="item" key={props.clip.id} onClick={playClip}>
            <div>{props.clip.title}</div>
            <div>Channel title: {props.clip.broadcaster_name}</div>
            <img alt="" height={200} width={200} src={props.clip.thumbnail_url}/>
        </li>

    )
}

export default TwitchClip;