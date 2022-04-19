import React from 'react'
import {SpotifyTrackProperties} from "../../models/ComponentProperties/SpotifyTrackProperties";
import PlayerStore from "../../stores/PlayerStore";

function SpotifyTrack(props: SpotifyTrackProperties): JSX.Element {

    const setPlayingType = PlayerStore(state => state.setPlayingType)
    const setPlayingId = PlayerStore(state => state.setPlayingId)

    function playTrack() {
        setPlayingType("SpotifyTrack")
        setPlayingId(props.track.id)
    }

    return (

        <li className="item" key={props.track.id} onClick={playTrack}>
            <div><a href={props.track.external_urls.spotify}>{props.track.name}</a></div>
            <div>Album: {props.track.album.name}</div>
            <img alt="" height={200} width={200} src={props.track.album.images[0].url}/>
        </li>

    )
}

export default SpotifyTrack;