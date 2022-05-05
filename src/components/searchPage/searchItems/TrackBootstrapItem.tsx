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

        <div className="col-md-3" onClick={() => {setCurrentPlayerToClickedItem()}}>
            <div className="card bg-dark"
                 style={{cursor: "pointer", backgroundSize: "100% 100%", backgroundImage: "url(" + props.item.thumbnailUrl + ")"}}>
                <div className="card-img-overlay text-end">
                    <h5 className="card-title text-uppercase">{props.item.title}</h5>
                    <p className="card-text">{props.item.albumName}</p>
                    <p className="card-text">{props.item.creator}</p>
                    <p className="card-text">{props.item.createdAt}</p>
                    <button className="btn btn-sm" type="button"
                            data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                        className='bx bx-plus'></i></button>
                </div>
            </div>
        </div>


    )

}

export default TrackBoostrapItem;
