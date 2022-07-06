import GlobalPlayerStore from "../../../stores/players/GlobalPlayerStore";
import {RadioSearchItemProperties} from "../../../models/components/pages/searchPage/searchItems/RadioSearchItemProperties";
import React, {useEffect} from "react";
import "aos/dist/aos.css";
import UserPlaylistsModalStore from "../../../stores/modals/UserPlaylistsModalStore";

function RadioSearchItem(props: RadioSearchItemProperties): JSX.Element {

    const setGlobalPlayerCurrentResult = GlobalPlayerStore(state => state.setGlobalPlayerCurrentResult)
    const setSearchCurrentResults = GlobalPlayerStore(state => state.setSearchCurrentResults)

    const setShowingPlaylistsModal = UserPlaylistsModalStore(state => state.setShowingPlaylistsModal)
    const setResultToAdd = UserPlaylistsModalStore(state => state.setResultToAdd)

    function setCurrentPlayerToClickedItem() {
        setGlobalPlayerCurrentResult(props.searchResult)
        setSearchCurrentResults(props.searchResults)
    }

    let weeklyViewsAmount;
    if (props.searchResult.weeklyViewsAmount || props.searchResult.weeklyViewsAmount === 0) {
        weeklyViewsAmount =
            <div className="card-text text-truncate">Weekly Views: {props.searchResult.weeklyViewsAmount}</div>
    }

    let totalViewsAmount;
    if (props.searchResult.totalViewsAmount || props.searchResult.totalViewsAmount === 0) {
        totalViewsAmount = <div className="card-text text-truncate">Total Views: {props.searchResult.totalViewsAmount}</div>
    }

    return (

        <div className="result col-lg-3 col-md-4 col-sm-6 col-6 position-relative" data-aos="fade-up">
            <div className="card scale clickable"

                 style={{backgroundSize: "100% 100%", backgroundImage: "url(" + props.searchResult.thumbnailUrl + ")"}}>
                <div className="options">
                    <button className="btn btn-add"
                            type="button"
                            onClick={() => {
                                setShowingPlaylistsModal(true)
                                setResultToAdd(props.searchResult)
                            }}
                    >
                        <i className='bx bx-plus'></i></button>
                </div>
                <div className="card-img-overlay text-end"
                     onClick={() => {
                         setCurrentPlayerToClickedItem()
                     }}
                >
                    <h5 className="card-title text-uppercase text-truncate">{props.searchResult.title}</h5>
                    <div className="card-text text-wrap">{props.searchResult.creator}</div>
                    {weeklyViewsAmount}
                    {totalViewsAmount}
                </div>
            </div>
        </div>

    )

}

export default RadioSearchItem;
