import React from 'react';
import '../../styles/style.css';
import {PlaylistItemProperties} from "../../models/components/playlistPage/PlaylistItemProperties";
import PlaylistPagePlayerStore from "../../stores/PlaylistPagePlayerStore";

function PlaylistItem(props: PlaylistItemProperties): JSX.Element {

    const setPlayingGenericResult = PlaylistPagePlayerStore(state => state.setPlayingGenericResult)

    return (

        <li className="list-group-item d-flex justify-content-between align-items-start align-middle item"
            style={{backgroundSize: "100% 100%", backgroundImage: "url(" + props.genericResult.thumbnailUrl + ")"}}
            onClick={() => {
                setPlayingGenericResult(props.genericResult)
            }}
        >
            <div className="ms-2 me-auto">
                <h6 className="fw-bold">{props.genericResult.title}</h6>
            </div>
            <span className="badge"><i className='bx bx-menu h5'></i></span>
        </li>

    )

}

export default PlaylistItem;
