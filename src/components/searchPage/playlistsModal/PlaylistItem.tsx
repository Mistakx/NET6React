import '../../../styles/SearchPage.css';
import React, {useEffect} from "react";
import "aos/dist/aos.css";
import {Modal} from "react-bootstrap";
import {PlaylistItemProperties} from "../../../models/components/searchPage/playlistsModal/PlaylistItemProperties";

function PlaylistItem(props: PlaylistItemProperties): JSX.Element {

    return (

        <div>

            <Modal.Body>
                <div onClick={() => {
                    // TODO
                }}>
                    {props.title}
                </div>
            </Modal.Body>


        </div>
    )
}

export default PlaylistItem;
