import React from 'react';
import '../../../../styles/style.css';
import EditOrCreatePlaylistModalStore from "../../../../stores/modals/EditOrCreatePlaylistModalStore";
import {CreatePlaylist} from "../../../../models/backendRequests/PlaylistRoute/CreatePlaylist";
import AlertStore from "../../../../stores/AlertStore";

function AddPlaylistItem(): JSX.Element {

    const setPlaylistToEditOrCreate = EditOrCreatePlaylistModalStore(state => state.setPlaylistToEditOrCreate)
    const setShowingEditOrCreatePlaylistModal = EditOrCreatePlaylistModalStore(state => state.setShowingEditOrCreatePlaylistModal)

    const prettyAlert = AlertStore(state => state.prettyAlert)

    return (

        <div className="col-lg-4 col-md-6 col-sm-6 col-6"
            data-aos="fade-up"
            onClick={() => {
                const sessionToken = window.sessionStorage.getItem("sessionToken")
                if (sessionToken) {
                    const newPlaylist: CreatePlaylist = {
                        title: "",
                        description: "",
                        visibility: "Public",
                        sessionToken: sessionToken
                    }
                    setPlaylistToEditOrCreate(newPlaylist)
                    setShowingEditOrCreatePlaylistModal(true)
                } else prettyAlert("User needs to be logged in to add a playlist", false)
            }}
        >

            <div className="card scale clickable align-middle add-playlist">
                <i className="bx bx-plus h1 text-center mt-5"
                    style={{fontSize: 120}}
                ></i>
            </div>

        </div>


    )

}

export default AddPlaylistItem;
