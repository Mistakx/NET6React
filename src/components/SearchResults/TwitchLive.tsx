import React from 'react'
import PlayerStore from "../../stores/PlayerStore";
import {TwitchLiveProperties} from "../../models/ComponentProperties/TwitchLiveProperties";

function TwitchLive(props: TwitchLiveProperties): JSX.Element {

    const setPlayingType = PlayerStore(state => state.setPlayingType)
    const setPlayingId = PlayerStore(state => state.setPlayingId)

    function playClip() {
        setPlayingType("TwitchLive")
        setPlayingId(props.channel.broadcaster_login)
    }

    return (

        <li className="item" key={props.channel.id} onClick={playClip}>
            <div>{props.channel.title}</div>
            <div>Channel title: {props.channel.display_name}</div>
            <img alt="" height={200} width={200} src={props.channel.thumbnail_url.replace("%{width}", "400").replace("%{height}", "400")}/>
        </li>

    )
}

export default TwitchLive;