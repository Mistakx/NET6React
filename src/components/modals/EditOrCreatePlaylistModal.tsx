import React, {useEffect, useState} from 'react';
import '../../styles/style.css';
import EditOrCreatePlaylistModalStore from "../../stores/modals/EditOrCreatePlaylistModalStore";
import {Modal, ModalBody, ModalHeader, ModalTitle} from "react-bootstrap";
import PlaylistRequests from "../../requests/backendRequests/PlaylistRequests";
import AlertStore from "../../stores/AlertStore";
import BackendResponsesStore from "../../stores/BackendResponsesStore";


function EditOrCreatePlaylistModal(): JSX.Element {

    const playlistToEditOrCreate = EditOrCreatePlaylistModalStore(state => state.playlistToEditOrCreate)
    const showingEditOrCreatePlaylistModal = EditOrCreatePlaylistModalStore(state => state.showingEditOrCreatePlaylistModal)
    const setShowingEditOrCreatePlaylistModal = EditOrCreatePlaylistModalStore(state => state.setShowingEditOrCreatePlaylistModal)

    const prettyAlert = AlertStore(state => state.prettyAlert)

    const setEditPlaylistResponse = BackendResponsesStore(state => state.setEditPlaylistResponse)
    const setCreatePlaylistResponse = BackendResponsesStore(state => state.setCreatePlaylistResponse)


    const [playlistTitle, setPlaylistTitle] = useState("")
    const [playlistDescription, setPlaylistDescription] = useState("")
    const [playlistVisibility, setPlaylistVisibility] = useState<"Public" | "Private">("Public")
    const [playlistId, setPlaylistId] = useState("")

    const [modalTitle, setModalTitle] = useState<JSX.Element>()

    useEffect(() => {
        if (playlistToEditOrCreate && "playlistId" in playlistToEditOrCreate) {
            setPlaylistId(playlistToEditOrCreate.playlistId)
            setPlaylistTitle(playlistToEditOrCreate?.title)
            setModalTitle(
                <div>
                    <strong>Edit Playlist</strong>
                    <br></br>
                    {playlistToEditOrCreate?.title.toUpperCase()}
                </div>
            )
            setPlaylistDescription(playlistToEditOrCreate?.description)
            setPlaylistVisibility(playlistToEditOrCreate?.visibility)
        } else {
            setModalTitle(<strong>New Playlist</strong>)
            setPlaylistId("")
            setPlaylistTitle("")
            setPlaylistVisibility("Public")
            setPlaylistDescription("")
        }
    }, [playlistToEditOrCreate])

    async function submitForm() {

        const sessionToken = sessionStorage.getItem("sessionToken")
        if (sessionToken) {
            let response: string;
            if (playlistId) {
                try {
                    response = await PlaylistRequests.editPlaylist(playlistId, playlistTitle, playlistVisibility, playlistDescription, sessionToken)
                    prettyAlert(response, true)
                    setEditPlaylistResponse(response)
                } catch (e: any) {
                    prettyAlert(e.response.data, false)
                }
            } else {
                try {
                    response = await PlaylistRequests.createPlaylist(playlistTitle, playlistVisibility, playlistDescription, sessionToken)
                    prettyAlert(response, true)
                    setCreatePlaylistResponse(response)
                } catch (e: any) {
                    prettyAlert(e.response.data, false)
                }
            }

        } else prettyAlert("You must be logged in to edit or create a playlist.", false)

        setShowingEditOrCreatePlaylistModal(false)
    }

    return (
        <Modal
            show={showingEditOrCreatePlaylistModal}
            backdrop="static"
            keyboard={true}
            centered={true}
        >

            <div className="modal-content">

                <ModalHeader>

                    <ModalTitle>
                        <h5 id="exampleModalLabel">{modalTitle}</h5>

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
                        await submitForm()
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

                                <label className="btn btn-outline-light">
                                    <input
                                        type="radio"
                                        className="btn-check"
                                        name="btnradio"
                                        id="btnradio1"
                                        defaultChecked={playlistVisibility === "Public"}
                                        onClick={() => {
                                            setPlaylistVisibility("Public")
                                        }}
                                    />
                                    Public
                                </label>

                                <label className="btn btn-outline-light active">
                                    <input
                                        type="radio"
                                        className="btn-check"
                                        name="btnradio"
                                        id="btnradio2"
                                        defaultChecked={playlistVisibility === "Private"}
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
    )

}

export default EditOrCreatePlaylistModal;
