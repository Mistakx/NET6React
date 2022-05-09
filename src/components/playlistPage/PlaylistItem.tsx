import React from 'react';
import '../../styles/style.css';
import {PlaylistItemProperties} from "../../models/components/playlistPage/PlaylistItemProperties";

function PlaylistItem(props: PlaylistItemProperties): JSX.Element {

    return (

        <li className="list-group-item d-flex justify-content-between align-items-start align-middle item"
            style={{backgroundImage: "url(" + props.thumbnailUrl + ")"}}
        >
            <div className="ms-2 me-auto">
                <h6 className="fw-bold">{props.title}</h6>
            </div>
            <span className="badge"><i className='bx bx-menu h5'></i></span>
        </li>

    )

}

export default PlaylistItem;
