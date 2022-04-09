import React from 'react'
import {SpotifyTrackProperties} from "../models/ComponentProperties/SpotifyTrackProperties";

function SpotifyTrack(props: SpotifyTrackProperties): JSX.Element {

    return (

        <li className="item" key={props.track.id}>
            <div><a href={props.track.external_urls.spotify}>{props.track.name}</a></div>
            <div>Popularity: {props.track.popularity}</div>
            <div>Album: {props.track.album.name}</div>
            <img alt="" height={200} width={200} src={props.track.album.images[0].url}/>
            <div>
                <iframe
                    src={"https://open.spotify.com/embed/track/" + props.track.id + "?utm_source=generator"}
                    width="100%" height="80" frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
                </iframe>
            </div>
        </li>

    )
}

export default SpotifyTrack;