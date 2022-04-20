import React from 'react'
import PlayerStore from "../../stores/PlayerStore";
import {TwitchLiveProperties} from "../../models/ComponentProperties/TwitchLiveProperties";

function TwitchLiveResult(props: TwitchLiveProperties): JSX.Element {

    const setPlayingType = PlayerStore(state => state.setPlayingType)
    const setPlayingId = PlayerStore(state => state.setPlayingId)

    function playClip() {
        setPlayingType("TwitchLiveResult")
        setPlayingId(props.livestream.broadcasterLogin)
    }

    return (

        <li className="item" key={props.livestream.id} onClick={playClip}>
            <div>{props.livestream.title}</div>
            <div>Channel title: {props.livestream.displayName}</div>
            <img alt="" height={200} width={200} src={props.livestream.thumbnailUrl.replace("%{width}", "400").replace("%{height}", "400")}/>
        </li>

    )
}

export default TwitchLiveResult;