import '../../../styles/SearchPage.css';
import React from "react";
import "aos/dist/aos.css";
import {Modal} from "react-bootstrap";
import {PlaylistItemProperties} from "../../../models/components/searchPage/playlistsModal/PlaylistItemProperties";
import PlaylistRequests from "../../../requests/backendRequests/PlaylistRequests";
import PlaylistsModalStore from "../../../stores/PlaylistsModalStore";

function PlaylistItem(props: PlaylistItemProperties): JSX.Element {

    const resultToAdd = PlaylistsModalStore(state => state.resultToAdd)

    return (

        <div>

            <Modal.Body>
                <div onClick={() => {
                    PlaylistRequests.addToPlaylist(props.id, resultToAdd!)
                }}>
                    {props.title}
                </div>
            </Modal.Body>


        </div>
    )
}

export default PlaylistItem;
