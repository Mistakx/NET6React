import '../../../styles/SearchPage.css';
import React from "react";
import "aos/dist/aos.css";
import {Modal} from "react-bootstrap";
import FollowersModalStore from "../../../stores/modals/FollowersModalStore";
import FollowersModalItemsList from "./FollowersModalItemsList";
import {UserProfileDto} from "../../../models/backendResponses/userRoute/UserProfileDto";
import {PlaylistDto} from "../../../models/backendRequests/PlaylistRoute/PlaylistDto";

function FollowersModal(): JSX.Element {

    const showingFollowersOf = FollowersModalStore(state => state.showingFollowersOf)

    const showingUserFollowersModal = FollowersModalStore(state => state.showingFollowersModal)
    const setShowingUserFollowersModal = FollowersModalStore(state => state.setShowingFollowersModal)

    let userFollowersModal;
    if (showingUserFollowersModal) {
        userFollowersModal = <Modal
            show={showingUserFollowersModal}
            backdrop="static"
            keyboard={true}
            centered={true}
        >

            <div className="modal-content">

                <Modal.Header>

                    <Modal.Title>
                        <h5 id="staticBackdropLabel">
                            <strong>Followers</strong><br/> {(showingFollowersOf as UserProfileDto).username || (showingFollowersOf as PlaylistDto).title}
                        </h5>
                    </Modal.Title>

                    <button className="btn-close"
                            onClick={() => {
                                setShowingUserFollowersModal(false)
                            }}>
                    </button>

                </Modal.Header>

                <Modal.Body>
                    <FollowersModalItemsList showingFollowerOf={showingFollowersOf!}/>
                </Modal.Body>

            </div>

        </Modal>
    }

    return (

        <div>
            {userFollowersModal}
        </div>

    )
}

export default FollowersModal;
