import '../../../styles/SearchPage.css';
import React, {useEffect} from "react";
import "aos/dist/aos.css";
import {Modal} from "react-bootstrap";
import UserPlaylistsModalStore from "../../../stores/modals/UserPlaylistsModalStore";
import UserPlaylistsModalItemsList from "./UserPlaylistsModalItemsList";

function UserPlaylistsModal(): JSX.Element {


    const resultToAdd = UserPlaylistsModalStore(state => state.resultToAdd)
    const showingPlaylistsModal = UserPlaylistsModalStore(state => state.showingPlaylistsModal)
    const setShowingPlaylistsModal = UserPlaylistsModalStore(state => state.setShowingPlaylistsModal)

    let playlistModal;
    if (showingPlaylistsModal && resultToAdd) {
        playlistModal = <Modal
            show={showingPlaylistsModal}
            backdrop="static"
            keyboard={true}
            centered={true}
        >

            <div className="modal-content">

                <Modal.Header>

                    <Modal.Title>
                        <h5 id="staticBackdropLabel">
                            <strong>Add to playlist</strong><br/> {resultToAdd?.title}
                        </h5>
                        <button className="btn btn-primary btn-sm text-end" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                            New playlist
                        </button>
                    </Modal.Title>

                    <button className="btn-close"
                            onClick={() => {
                                setShowingPlaylistsModal(false)
                            }}>
                    </button>

                </Modal.Header>

                <Modal.Body>
                    <UserPlaylistsModalItemsList/>
                </Modal.Body>

            </div>

        </Modal>
    }

    return (

        <div>
            {playlistModal}
        </div>

    )
}

export default UserPlaylistsModal;
