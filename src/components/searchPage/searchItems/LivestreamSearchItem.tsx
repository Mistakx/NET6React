import PlayerStore from "../../../stores/PlayerStore";
import {
    LivestreamSearchItemProperties
} from "../../../models/components/searchPage/searchItems/LivestreamSearchItemProperties";
import React from "react";
import "aos/dist/aos.css";
import PlaylistsModalStore from "../../../stores/PlaylistsModalStore";

function LivestreamSearchItem(props: LivestreamSearchItemProperties): JSX.Element {

    const setPlayingGenericResult = PlayerStore(state => state.setPlayingGenericResult)

    const setShowingPlaylistsModal = PlaylistsModalStore(state => state.setShowingPlaylistsModal)
    const setResultToAdd = PlaylistsModalStore(state => state.setResultToAdd)


    function setCurrentPlayerToClickedItem() {
        setPlayingGenericResult(props.item)
    }

    return (

        <div className="col-md-4 col-sm-4 col-lg-3 col-6 position-relative scale" data-aos="fade-down">

            <div className="clickable card bg-dark"
                 onClick={() => {
                     setCurrentPlayerToClickedItem()
                 }}
                 style={{backgroundSize: "100% 100%", backgroundImage: "url(" + props.item.thumbnailUrl + ")"}}>
                <div className="card-img-overlay text-end">
                    <h5 className="card-title text-uppercase text-truncate">{props.item.title}</h5>
                    <p className="card-text text-truncate">{props.item.gameName}</p>
                    <p className="card-text text-truncate">{props.item.creator}</p>
                </div>
            </div>

            <div className="options">
                <button className="btn btn-add"
                        onClick={() => {
                            setShowingPlaylistsModal(true)
                            setResultToAdd(props.item)
                        }}
                >
                    <i className='bx bx-plus'></i>
                </button>
            </div>

        </div>

    )

}

export default LivestreamSearchItem;
