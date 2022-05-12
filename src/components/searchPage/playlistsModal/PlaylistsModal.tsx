import '../../../styles/SearchPage.css';
import React, {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {Modal} from "react-bootstrap";
import {PlaylistsModalProperties} from "../../../models/components/searchPage/searchItems/PlaylistsModalProperties";
import SearchedListStore from "../../../stores/SearchedListStore";
import PlaylistsModalStore from "../../../stores/PlaylistsModalStore";
import {PlaylistDetails} from "../../../models/backendRequests/PlaylistDetails";
import axios from "axios";
import {PlaylistBasicDetails} from "../../../models/backendRequests/PlaylistBasicDetails";
import PlaylistItemsList from "./PlaylistItemsList";

function PlaylistsModal(): JSX.Element {

    const [userPlaylists, setUserPlaylists] = React.useState<PlaylistBasicDetails[]>();

    const resultToAdd = PlaylistsModalStore(state => state.resultToAdd)
    const showingPlaylistsModal = PlaylistsModalStore(state => state.showingPlaylistsModal)
    const setShowingPlaylistsModal = PlaylistsModalStore(state => state.setShowingPlaylistsModal)

    async function getPlaylists(userId: string) {
        const url = "/User/Playlists/" + userId;

        const options = {
            method: 'GET',
            url: url,
        };

        // @ts-ignore
        let profileResponse = await axios(options);
        let profile: PlaylistBasicDetails[] = profileResponse.data;
        return profile;

    }

    useEffect(() => {
        if (!userPlaylists) {
            (async () => {
                setUserPlaylists(await getPlaylists(process.env.REACT_APP_USER_ID as string));
            })()
        }
    }, [userPlaylists]);

    let playlistModal;
    if (showingPlaylistsModal && resultToAdd) {
        playlistModal = <Modal
            show={showingPlaylistsModal}
            backdrop="static"
            keyboard={true}
        >

            <div className="modal-content">

                <Modal.Header>

                    <Modal.Title>
                        <h5 id="staticBackdropLabel">
                            <strong>Add to playlist - </strong> {resultToAdd!.title}
                        </h5>
                    </Modal.Title>

                    <button className="btn-close"
                            onClick={() => {
                                setShowingPlaylistsModal(false)
                            }}>
                    </button>

                </Modal.Header>

                <PlaylistItemsList/>

            </div>

        </Modal>
    }

    return (

        <div>
        {playlistModal}
        </div>

    )
}

export default PlaylistsModal;
