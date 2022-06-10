import GlobalPlayerStore from "../../../stores/GlobalPlayerStore";
import {TrackSearchItemProperties} from "../../../models/components/searchPage/searchItems/TrackSearchItemProperties";
import React from "react";
import "aos/dist/aos.css";
import UserPlaylistsModalStore from "../../../stores/UserPlaylistsModalStore";

function TrackSearchItem(props: TrackSearchItemProperties): JSX.Element {

    const setGlobalPlayerCurrentResult = GlobalPlayerStore(state => state.setGlobalPlayerCurrentResult)

    const setShowingPlaylistsModal =  UserPlaylistsModalStore(state => state.setShowingPlaylistsModal)
    const setResultToAdd =  UserPlaylistsModalStore(state => state.setResultToAdd)

    function setCurrentPlayerToClickedItem() {
        setGlobalPlayerCurrentResult(props.item)
    }

    return (

        <div className="result col-md-4 col-sm-4 col-lg-3 col-6 position-relative" data-aos="fade-up">
            <div className="card scale clickable"
                 onClick={() => {
                     setCurrentPlayerToClickedItem()
                 }}
                 style={{backgroundSize: "100% 100%", backgroundImage: "url(" + props.item.thumbnailUrl + ")"}}>
                <div className="card-img-overlay text-end">
                    <h5 className="card-title text-uppercase text-truncate">{props.item.title}</h5>
                    <p className="card-text text-truncate">{props.item.albumName}</p>
                    <p className="card-text text-wrap">{props.item.creator}</p>
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

export default TrackSearchItem;
