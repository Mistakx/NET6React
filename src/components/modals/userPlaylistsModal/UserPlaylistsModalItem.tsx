import '../../../styles/SearchPage.css';
import React from "react";
import "aos/dist/aos.css";
import {PlaylistItemProperties} from "../../../models/components/modals/userPlaylistsModal/PlaylistItemProperties";
import PlaylistRequests from "../../../requests/backendRequests/PlaylistRequests";
import UserPlaylistsModalStore from "../../../stores/modals/UserPlaylistsModalStore";
import AlertStore from "../../../stores/AlertStore";

function UserPlaylistsModalItem(props: PlaylistItemProperties): JSX.Element {

    const resultToAdd = UserPlaylistsModalStore(state => state.resultToAdd)

    const prettyAlert = AlertStore(state => state.prettyAlert)

    return (

        <li className="list-group-item d-flex justify-content-between align-items-start clickable" onClick={async () => {
            try {
                let response = await PlaylistRequests.addContentToPlaylist(props.id, resultToAdd!)
                prettyAlert(response, true)
            } catch (e: any) {
                prettyAlert(e.response.data, false)
            }
        }}>
            {props.title}

            <span className="badge"><i className='bx bx-list-plus'></i></span>
        </li>

    )
}

export default UserPlaylistsModalItem;
