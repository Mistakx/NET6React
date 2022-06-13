import '../../../styles/SearchPage.css';
import React from "react";
import "aos/dist/aos.css";
import {PlaylistItemProperties} from "../../../models/components/searchPage/playlistsModal/PlaylistItemProperties";
import PlaylistRequests from "../../../requests/backendRequests/PlaylistRequests";
import UserPlaylistsModalStore from "../../../stores/modals/UserPlaylistsModalStore";
import AlertStore from "../../../stores/AlertStore";

function PlaylistItem(props: PlaylistItemProperties): JSX.Element {

    const resultToAdd = UserPlaylistsModalStore(state => state.resultToAdd)

    const prettyAlert = AlertStore(state => state.prettyAlert)

    return (

        <li className="list-group-item clickable" onClick={async () => {
            try {
                let response = await PlaylistRequests.addToPlaylist(props.id, resultToAdd!)
                prettyAlert(response, true)
            } catch (e: any) {
                prettyAlert(e.response?.data || e.toJSON().message, false)
            }
        }}>
            {props.title}
        </li>

    )
}

export default PlaylistItem;
