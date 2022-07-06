import '../../../styles/SearchPage.css';
import React from "react";
import {Collapse, Card, Button} from "react-bootstrap";
import "aos/dist/aos.css";
import PlaylistRequests from "../../../requests/backendRequests/PlaylistRequests";
import AlertStore from "../../../stores/AlertStore";
import BackendResponsesStore from "../../../stores/BackendResponsesStore";

function AddPlaylistForm(): JSX.Element {

    const prettyAlert = AlertStore(state => state.prettyAlert)

    const setNewPlaylistResponse = BackendResponsesStore(state => state.setNewPlaylistResponse)

    const [playlistTitle, setPlaylistTitle] = React.useState("");

    return (

        <div className="add-list clickable mb-2">
            <div className="collapse" id="collapseExample">
                <form
                onSubmit={async (e) => {
                    e.preventDefault()
                    const sessionToken = localStorage.getItem("sessionToken")
                    if (sessionToken) {
                        const response = await PlaylistRequests.createPlaylist(playlistTitle, "Public", "", sessionToken)
                        setNewPlaylistResponse(response)
                        prettyAlert(response, true)
                    } else prettyAlert("You need to be logged in to add a playlist.", false)
                }}
            >
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Create new playlist"
                           onChange={(e) => {
                               setPlaylistTitle(e.target.value)
                           }}
                    />
                    <button className="btn btn-success">OK</button>
                </div>
            </form>
            </div>
        </div>

    )
}

export default AddPlaylistForm;
