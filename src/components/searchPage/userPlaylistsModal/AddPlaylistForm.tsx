import '../../../styles/SearchPage.css';
import React from "react";
import "aos/dist/aos.css";
import PlaylistRequests from "../../../requests/backendRequests/PlaylistRequests";
import {
    AddPlaylistFormProperties
} from "../../../models/components/searchPage/playlistsModal/AddPlaylistFormProperties";
import AlertStore from "../../../stores/AlertStore";

function AddPlaylistForm(props: AddPlaylistFormProperties): JSX.Element {

    const prettyAlert = AlertStore(state => state.prettyAlert)

    const [playlistTitle, setPlaylistTitle] = React.useState("");

    return (

        <li className="list-group-item add-list clickable">

            <form
                onSubmit={async (e) => {
                    e.preventDefault()
                    const sessionToken = window.sessionStorage.getItem("sessionToken")
                    if (sessionToken) {
                        const response = await PlaylistRequests.createPlaylist(playlistTitle, "Public", "", sessionToken)
                        props.setNewPlaylistResponse(response)
                        prettyAlert(response, true)
                    } else prettyAlert("You need to be logged in to add a playlist.", false)
                }}
            >
                <div className="input-group">

                    <input type="text" className="form-control" placeholder="Add Playlist"
                           onChange={(e) => {
                               setPlaylistTitle(e.target.value)
                           }}
                    />
                    <button className="btn btn-success">OK</button>
                </div>
            </form>

        </li>

    )
}

export default AddPlaylistForm;
