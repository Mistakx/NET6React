import React from 'react';
import PlayerStore from "../../../stores/PlayerStore";
import {TrackItemComponentProperties} from "../../../models/components/searchPage/TrackItemComponentProperties";
import SearchedListStore from "../../../stores/SearchedListStore";

function TrackBoostrapItem(props: TrackItemComponentProperties): JSX.Element {

    const setPlayingId = PlayerStore(state => state.setPlayingId)
    const setPlayingThumbnailUrl = PlayerStore(state => state.setPlayingThumbnailUrl)
    const searchList = SearchedListStore(state => state.searchedList)
    const setPlayerCreator = PlayerStore(state => state.setPlayerCreator)

    function setCurrentPlayerToClickedItem() {
        setPlayingId(props.item.id);
        setPlayingThumbnailUrl(props.item.thumbnailUrl)
        setPlayerCreator(searchList!.getPlayerCreator())
    }

    return (

        <div className="col-md-3 col-6 position-relative">
            <div className="clickable card bg-dark"
                 onClick={() => {
                     setCurrentPlayerToClickedItem()
                 }}
                 style={{backgroundSize: "100% 100%", backgroundImage: "url(" + props.item.thumbnailUrl + ")"}}>
                <div className="card-img-overlay text-end">
                    <h5 className="card-title text-uppercase text-truncate">{props.item.title}</h5>
                    <p className="card-text text-truncate">{props.item.albumName}</p>
                    <p className="card-text text-truncate">{props.item.creator}</p>
                    {/* <p className="card-text text-truncate">{props.item.createdAt}</p> */}
                    </div>
                </div>
                <button className="btn btn-sm btn-add" type="button"
                    data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                    className='bx bx-plus'></i></button>
        </div>


    )

}

export default TrackBoostrapItem;
