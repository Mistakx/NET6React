import '../../../styles/SearchPage.css';
import React, {useEffect} from "react";
import "aos/dist/aos.css";
import {Modal} from "react-bootstrap";
import UserPlaylistsModalStore from "../../../stores/modals/UserPlaylistsModalStore";
import axios from "axios";
import {PlaylistBasicDetails} from "../../../models/backendRequests/PlaylistRoute/PlaylistBasicDetails";
import PlaylistItemsList from "./PlaylistItemsList";
import AlertStore from "../../../stores/AlertStore";
import UserRequests from "../../../requests/backendRequests/UserRequests";

function UserPlaylistsModal(): JSX.Element {

    const [userPlaylists, setUserPlaylists] = React.useState<PlaylistBasicDetails[]>();

    const prettyAlert = AlertStore(state => state.prettyAlert)

    const resultToAdd = UserPlaylistsModalStore(state => state.resultToAdd)
    const showingPlaylistsModal = UserPlaylistsModalStore(state => state.showingPlaylistsModal)
    const setShowingPlaylistsModal = UserPlaylistsModalStore(state => state.setShowingPlaylistsModal)

    let username = sessionStorage.getItem("username");

    useEffect(() => {
        if (!userPlaylists) {
            (async () => {
                const sessionToken = window.sessionStorage.getItem("sessionToken");
                if (sessionToken) {
                    try {
                        setUserPlaylists(await UserRequests.getPlaylists(username!, sessionToken));
                    } catch (e: any) {
                        prettyAlert(e.response?.data || e.toJSON().message, false)
                    }
                } else prettyAlert("No session token found.", false)

            })()
        }
    }, [userPlaylists]);

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
                    </Modal.Title>

                    <button className="btn-close"
                            onClick={() => {
                                setShowingPlaylistsModal(false)
                            }}>
                    </button>

                </Modal.Header>

                <Modal.Body>
                    <PlaylistItemsList/>
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
