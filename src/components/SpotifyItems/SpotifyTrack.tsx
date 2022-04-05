import React from 'react'
import {Track} from 'spotify-types';

function SpotifyTrack(props: Track): JSX.Element {

    // TODO
    function playSpotify(trackID: string) {
        return trackID
    }

    return (

        <li className="item" key={props.id}>
            <div>{props.id}</div>
            <div><a href={props.external_urls.spotify}>{props.name}</a></div>
            <div>{props.popularity}</div>
            <div>{props.album.name}</div>
            <img alt="" height={200} width={200} src={props.album.images[0].url}/>
            <div>
                <iframe
                    src={"https://open.spotify.com/embed/track/" + props.id + "?utm_source=generator"}
                    width="100%" height="80" frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">

                </iframe>
            </div>
        </li>



        //
        // <li className="item" key={props.id} onClick={() => {
        //     playSpotify(props.id)
        // }}>
        //     <div>
        //         <b><a href={props.href}>{props.name}</a></b>
        //         <p>{props.album}</p>
        //     </div>
        //     <ul className="meta">
        //         <li>By: <a href={props.artists[0].href}>{props.artists[0].name}</a></li>
        //         <li>Duration: {props.duration_ms * 1000}</li>
        //         {/*<li>Uploaded: {props.item.album.release_date}</li>*/}
        //     </ul>
        //     <img alt="" height={200} width={200} src={props.album.images[0].url}/>
        // </li>
    )
}

export default SpotifyTrack;