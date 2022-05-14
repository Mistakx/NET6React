import '../../../styles/SearchPage.css';
import React from "react";
import "aos/dist/aos.css";
import {Modal} from "react-bootstrap";
import {PlaylistItemProperties} from "../../../models/components/searchPage/playlistsModal/PlaylistItemProperties";
import PlaylistRequests from "../../../requests/backendRequests/PlaylistRequests";
import PlaylistsModalStore from "../../../stores/PlaylistsModalStore";

function PlaylistItem(props: PlaylistItemProperties): JSX.Element {

    const resultToAdd = PlaylistsModalStore(state => state.resultToAdd)

    return (

        <li className="list-group-item clickable" onClick={() => {
            PlaylistRequests.addToPlaylist(props.id, resultToAdd!)
        }}>
            {props.title}
        </li>

    )
}

export default PlaylistItem;
