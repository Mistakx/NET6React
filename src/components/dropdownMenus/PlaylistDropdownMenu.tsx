import {EditPlaylist} from "../../models/backendRequests/PlaylistRoute/EditPlaylist";
import PlaylistRequests from "../../requests/backendRequests/PlaylistRequests";
import React from "react";
import AlertStore from "../../stores/AlertStore";
import EditOrCreatePlaylistModalStore from "../../stores/modals/EditOrCreatePlaylistModalStore";
import {PlaylistDropdownMenuProperties} from "../../models/components/dropdownMenus/PlaylistDropdownMenuProperties";
import BackendResponsesStore from "../../stores/BackendResponsesStore";

function PlaylistDropdownMenu(props: PlaylistDropdownMenuProperties) {

    const prettyAlert = AlertStore(state => state.prettyAlert)

    const setShowingEditOrCreatePlaylistModal = EditOrCreatePlaylistModalStore(state => state.setShowingEditOrCreatePlaylistModal)
    const setPlaylistToEditOrCreate = EditOrCreatePlaylistModalStore(state => state.setPlaylistToEditOrCreate)

    const setDeletePlaylistResponse = BackendResponsesStore(state => state.setDeletePlaylistResponse)
    const setResetCoverResponse = BackendResponsesStore(state => state.setResetCoverResponse)

    return (

        <div className="options-dropdown">
            <div className="btn-group">

                <button type="button" className="btn dropdown-toggle-split"
                        data-bs-toggle="dropdown" aria-expanded="false">
                    <i className='bx bx-dots-horizontal-rounded'></i>
                </button>
                <ul className="dropdown-menu dropdown-menu-dark">
                    <li
                        onClick={() => {
                            const sessionToken = sessionStorage.getItem("sessionToken")
                            if (sessionToken) {
                                setShowingEditOrCreatePlaylistModal(true)
                                let playlistToEdit: EditPlaylist = {
                                    playlistId: props.basicDetails.id,
                                    title: props.basicDetails.title,
                                    description: props.basicDetails.description,
                                    visibility: props.basicDetails.visibility!,
                                    sessionToken: sessionToken
                                }
                                setPlaylistToEditOrCreate(playlistToEdit)
                            } else prettyAlert("You must be logged in to edit a playlist.", false)

                        }}>
                        <div className="dropdown-item">Edit</div>
                    </li>
                    <li
                        onClick={async () => {
                            const sessionToken = sessionStorage.getItem("sessionToken")
                            if (sessionToken) {
                                try {
                                    let response = await PlaylistRequests.setCover(props.basicDetails.id, "", sessionToken)
                                    prettyAlert(response, true)
                                    setResetCoverResponse(response)
                                } catch (e: any) {
                                    prettyAlert(e.response.data, true)
                                }
                            } else prettyAlert("You must be logged in to edit a playlist.", false)
                        }}>
                        <div className="dropdown-item">Reset cover</div>
                    </li>
                    <li
                        onClick={async () => {
                            const sessionToken = sessionStorage.getItem("sessionToken")
                            if (sessionToken) {
                                try {
                                    let response = await PlaylistRequests.deletePlaylist(props.basicDetails.id, sessionToken)
                                    prettyAlert(response, true)
                                    setDeletePlaylistResponse(response)
                                } catch (e: any) {
                                    prettyAlert(e.response.data, false)
                                }
                            } else prettyAlert("You must be logged in to delete a playlist.", false)
                        }}
                    >
                        <div className="dropdown-item text-danger">Delete</div>
                    </li>
                </ul>

            </div>
        </div>

    )

}

export default PlaylistDropdownMenu;