import '../../../styles/SearchPage.css';
import React from "react";
import "aos/dist/aos.css";
import PlaylistRequests from "../../../requests/backendRequests/PlaylistRequests";
import {
    AddPlaylistFormProperties
} from "../../../models/components/searchPage/playlistsModal/AddPlaylistFormProperties";

function AddPlaylistForm(props: AddPlaylistFormProperties): JSX.Element {

    const [newPlaylistTitle, setNewPlaylistTitle] = React.useState("");

    return (

        <li className="list-group-item add-list clickable">

            <form
                onSubmit={async (e) => {
                    e.preventDefault()
                    const sessionToken = window.sessionStorage.getItem("sessionToken")
                    if (sessionToken) {
                        const addPlaylistResponse = await PlaylistRequests.createPlaylist(newPlaylistTitle, sessionToken)
                        props.setNewPlaylistResponse(addPlaylistResponse)
                        alert(addPlaylistResponse)
                    }
                    else alert("No session token.")
                }}
            >
                <div className="input-group">

                    <input type="text" className="form-control" placeholder="Add Playlist"
                           onChange={(e) => {
                               setNewPlaylistTitle(e.target.value)
                           }}
                    />
                    <button className="btn btn-success">OK</button>
                </div>
            </form>

        </li>

    )
}

export default AddPlaylistForm;
