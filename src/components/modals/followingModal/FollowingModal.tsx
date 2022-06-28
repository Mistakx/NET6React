import '../../../styles/SearchPage.css';
import React, {useEffect} from "react";
import "aos/dist/aos.css";
import {Modal} from "react-bootstrap";
import FollowersModalStore from "../../../stores/modals/FollowersModalStore";
import FollowingModalItemsList from "./FollowingModalItemsList";
import {UserProfileDto} from "../../../models/backendResponses/userRoute/UserProfileDto";
import {PlaylistDto} from "../../../models/backendRequests/PlaylistRoute/PlaylistDto";
import FollowingModalStore from "../../../stores/modals/FollowingModalStore";

function FollowingModal(): JSX.Element {

    const [showing, setShowing] = React.useState<"Users" | "Playlists">("Users");

    const showingFollowingOf = FollowingModalStore(state => state.showingFollowingOf)

    const showingFollowingModal = FollowingModalStore(state => state.showingFollowingModal)
    const setShowingFollowingModal = FollowingModalStore(state => state.setShowingFollowingModal)

    useEffect(() => {
        if (showingFollowingModal && document.getElementById('TopSelect')) {
            // @ts-ignore
            document.getElementById('TopSelect')!.value = showing;
        }

    }, [showingFollowingModal])

    let followersModal;
    if (showingFollowingOf) {
        followersModal = <Modal
            show={showingFollowingModal}
            backdrop="static"
            keyboard={true}
            centered={true}
        >

            <div className="modal-content">

                <Modal.Header>

                    <Modal.Title>
                        <h5 id="staticBackdropLabel">
                            <strong>Following</strong><br/> {showingFollowingOf.username}
                        </h5>
                        <select className="form-select form-select-sm bg-dark text-white" id="TopSelect"
                                onChange={(e) => {
                                    setShowing(e.target.value as "Users" | "Playlists")
                                }}
                        >
                            <option>Users</option>
                            <option>Playlists</option>
                        </select>
                    </Modal.Title>

                    <button className="btn-close"
                            onClick={() => {
                                setShowingFollowingModal(false)
                            }}>
                    </button>

                </Modal.Header>

                <Modal.Body>
                    <FollowingModalItemsList showing={showing} showingFollowingOf={showingFollowingOf}/>
                </Modal.Body>

            </div>

        </Modal>
    }

    return (

        <>
            {followersModal}
        </>

    )
}

export default FollowingModal;
