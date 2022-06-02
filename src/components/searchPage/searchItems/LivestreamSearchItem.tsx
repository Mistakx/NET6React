import GlobalPlayerStore from "../../../stores/GlobalPlayerStore";
import {LivestreamSearchItemProperties} from "../../../models/components/searchPage/searchItems/LivestreamSearchItemProperties";
import React from "react";
import "aos/dist/aos.css";
import UserPlaylistsModalStore from "../../../stores/UserPlaylistsModalStore";

function LivestreamSearchItem(props: LivestreamSearchItemProperties): JSX.Element {

    const setPlayingGenericResult = GlobalPlayerStore(state => state.setPlayingGenericResult)

    const setShowingPlaylistsModal = UserPlaylistsModalStore(state => state.setShowingPlaylistsModal)
    const setResultToAdd = UserPlaylistsModalStore(state => state.setResultToAdd)

    function setCurrentPlayerToClickedItem() {
        setPlayingGenericResult(props.item)
    }

    return (

        <div className="result col-lg-3 col-md-4 col-sm-6 col-6 position-relative" data-aos="fade-up">
            <div className="card scale clickable"
                onClick={() => {
                    setCurrentPlayerToClickedItem()
                }}
                style={{backgroundSize: "100% 100%", backgroundImage: "url(" + props.item.thumbnailUrl + ")"}}>
                <div className="options">
                    <button className="btn btn-add"
                        type="button"
                        onClick={() => {
                            setShowingPlaylistsModal(true)
                            setResultToAdd(props.item)
                        }}
                        >
                    <i className='bx bx-plus'></i></button>
                </div>
                <div className="card-img-overlay text-end">
                    <h5 className="card-title text-uppercase text-truncate">{props.item.title}</h5>
                    <p className="card-text text-truncate">{props.item.gameName}</p>
                    <p className="card-text text-truncate">{props.item.creator}</p>
                </div>
            </div>
        </div>

    )

}

export default LivestreamSearchItem;
