import '../../../styles/SearchPage.css';
import React from "react";
import "aos/dist/aos.css";
import {Modal} from "react-bootstrap";
import FollowersModalStore from "../../../stores/modals/FollowersModalStore";
import StatisticsModalList from "./StatisticsModalList";
import {UserProfileDto} from "../../../models/backendResponses/userRoute/UserProfileDto";
import {PlaylistDto} from "../../../models/backendRequests/PlaylistRoute/PlaylistDto";
import StatisticsModalStore from "../../../stores/modals/StatisticsModalStore";

function StatisticsModal(): JSX.Element {

    const showingStatisticsOf = StatisticsModalStore(state => state.showingStatisticsOf)

    const showingStatisticsModal = StatisticsModalStore(state => state.showingStatisticsModal)
    const setShowingStatisticsModal = StatisticsModalStore(state => state.setShowingStatisticsModal)

    let statisticsModal;
    if (showingStatisticsOf != null) {
        statisticsModal = <Modal
            show={showingStatisticsModal}
            backdrop="static"
            keyboard={true}
            centered={true}
        >

            <div className="modal-content">

                <Modal.Header>

                    <Modal.Title>
                        <h5 id="staticBackdropLabel">
                            <strong>Statistics</strong><br/> {(showingStatisticsOf as UserProfileDto).username || (showingStatisticsOf as PlaylistDto).title}
                        </h5>
                    </Modal.Title>

                    <button className="btn-close"
                            onClick={() => {
                                setShowingStatisticsModal(false)
                            }}>
                    </button>

                </Modal.Header>

                <Modal.Body>
                    <StatisticsModalList showingStatisticsOf={showingStatisticsOf!}/>
                </Modal.Body>

            </div>

        </Modal>

    }

    return (
        <>
            {statisticsModal}
        </>
    )
}

export default StatisticsModal;
