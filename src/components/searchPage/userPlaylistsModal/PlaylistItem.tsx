import '../../../styles/SearchPage.css';
import React from "react";
import "aos/dist/aos.css";
import {PlaylistItemProperties} from "../../../models/components/searchPage/playlistsModal/PlaylistItemProperties";
import PlaylistRequests from "../../../requests/backendRequests/PlaylistRequests";
import UserPlaylistsModalStore from "../../../stores/UserPlaylistsModalStore";

function PlaylistItem(props: PlaylistItemProperties): JSX.Element {

    const resultToAdd = UserPlaylistsModalStore(state => state.resultToAdd)

    return (

        <li className="list-group-item clickable" onClick={async () => {
            alert(await PlaylistRequests.addToPlaylist(props.id, resultToAdd!))
        }}>
            {props.title}
        </li>

    )
}

export default PlaylistItem;
