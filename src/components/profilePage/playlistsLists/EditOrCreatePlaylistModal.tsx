import React, {useEffect, useState} from 'react';
import '../../../styles/style.css';
import EditOrCreatePlaylistModalStore from "../../../stores/EditOrCreatePlaylistModalStore";
import {Modal, ModalBody, ModalHeader, ModalTitle} from "react-bootstrap";
import PlaylistRequests from "../../../requests/backendRequests/PlaylistRequests";
import {
    CreateOrEditPlaylistItemProperties
} from "../../../models/components/profilePage/CreateOrEditPlaylistItemProperties";

function EditOrCreatePlaylistModal(props: CreateOrEditPlaylistItemProperties): JSX.Element {

    const playlistToEditOrCreate = EditOrCreatePlaylistModalStore(state => state.playlistToEditOrCreate)
    const showingEditOrCreatePlaylistModal = EditOrCreatePlaylistModalStore(state => state.showingEditOrCreatePlaylistModal)
    const setShowingEditOrCreatePlaylistModal = EditOrCreatePlaylistModalStore(state => state.setShowingEditOrCreatePlaylistModal)

    const [playlistTitle, setPlaylistTitle] = useState("")
    const [playlistDescription, setPlaylistDescription] = useState("")
    const [playlistVisibility, setPlaylistVisibility] = useState<"Public" | "Private">("Public")
    const [playlistId, setPlaylistId] = useState("")

    useEffect(() => {
        if (playlistToEditOrCreate && "id" in playlistToEditOrCreate) {
            setPlaylistId(playlistToEditOrCreate.id)
            setPlaylistTitle(playlistToEditOrCreate?.title)
            setPlaylistDescription(playlistToEditOrCreate?.description)
            setPlaylistVisibility(playlistToEditOrCreate?.visibility)
        } else {
            setPlaylistId("")
            setPlaylistTitle("")
            setPlaylistVisibility("Public")
            setPlaylistDescription("")
        }
    }, [playlistToEditOrCreate])

    async function submitForm() {

        const sessionToken = sessionStorage.getItem("sessionToken")
        if (sessionToken) {
            if (playlistId) {
                const response = await PlaylistRequests.editPlaylist(playlistId, playlistTitle, playlistVisibility, playlistDescription, sessionToken)
                alert(response)
                props.setEditOrCreatePlaylistResponse(response)
            } else {
                const response = await PlaylistRequests.createPlaylist(playlistTitle, playlistVisibility, playlistDescription, sessionToken)
                alert(response)
                props.setEditOrCreatePlaylistResponse(response)
            }
        } else alert("You must be logged in to edit or create a playlist.")

    }

    let editPlaylistModal;
    if (showingEditOrCreatePlaylistModal) {
        editPlaylistModal = <Modal
            show={showingEditOrCreatePlaylistModal}
            backdrop="static"
            keyboard={true}
            centered={true}
        >

            <div className="modal-content">

                <ModalHeader>

                    <ModalTitle>
                        <h5 id="exampleModalLabel">New playlist</h5>

                    </ModalTitle>

                    <button className="btn-close"
                            onClick={() => {
                                setShowingEditOrCreatePlaylistModal(false)
                            }}>
                    </button>

                </ModalHeader>

                <ModalBody>
                    <form onSubmit={async (e) => {
                        e.preventDefault()
                        alert(await submitForm())
                    }}>
                        <div className="form-group mb-3">
                            <input type="text" className="form-control" placeholder="Playlist title"
                                   value={playlistTitle}
                                   onChange={(e) => {
                                       setPlaylistTitle(e.target.value)
                                   }}
                            />
                        </div>

                        <div className="form-group mb-3 d-grid">
                            <div className="btn-group" role="group"
                                 aria-label="Basic radio toggle button group">

                                <label className="btn btn-outline-primary">
                                    <input
                                        type="radio"
                                        name="btnradio"
                                        id="btnradio1"
                                        checked={playlistVisibility === "Public"}
                                        onClick={() => {
                                            setPlaylistVisibility("Public")
                                        }}
                                    />
                                    Public
                                </label>

                                <label className="btn btn-outline-primary">
                                    <input
                                        type="radio"
                                        name="btnradio"
                                        id="btnradio2"
                                        checked={playlistVisibility === "Private"}
                                        onClick={() => {
                                            setPlaylistVisibility("Private")
                                        }}
                                    />
                                    Private
                                </label>

                            </div>
                        </div>

                        <div className="form-group">
                                    <textarea name="" id="" placeholder="Playlist description" className="form-control"
                                              onChange={(e) => {
                                                  setPlaylistDescription(e.target.value)
                                              }}
                                              value={playlistDescription}
                                    >

                                    </textarea>
                        </div>
                    </form>
                </ModalBody>

                <div className="modal-footer">
                    <button type="submit" className="btn btn-success"
                            onClick={async (e) => {
                                e.preventDefault()
                                await submitForm()
                            }}
                    >
                        Save changes
                    </button>
                </div>
            </div>

        </Modal>
    }

    return (
        <div>
            {editPlaylistModal}
        </div>
    )

}

export default EditOrCreatePlaylistModal;
