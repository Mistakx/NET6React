import GlobalPlayerStore from "../../../stores/players/GlobalPlayerStore";
import {VideoSearchItemProperties} from "../../../models/components/pages/searchPage/VideoSearchItemProperties";
import React, {useEffect} from "react";
import "aos/dist/aos.css";
import UserPlaylistsModalStore from "../../../stores/modals/UserPlaylistsModalStore";

function VideoSearchItem(props: VideoSearchItemProperties): JSX.Element {

    const setGlobalPlayerCurrentResult = GlobalPlayerStore(state => state.setGlobalPlayerCurrentResult)
    const setSearchCurrentResults = GlobalPlayerStore(state => state.setSearchCurrentResults)

    const setShowingPlaylistsModal = UserPlaylistsModalStore(state => state.setShowingPlaylistsModal)
    const setResultToAdd = UserPlaylistsModalStore(state => state.setResultToAdd)

    function setCurrentPlayerToClickedItem() {
        setGlobalPlayerCurrentResult(props.searchResult)
        setSearchCurrentResults(props.searchResults)
    }

    let monthlyViewsAmount;
    if (props.searchResult.monthlyViewsAmount || props.searchResult.monthlyViewsAmount === 0) {
        monthlyViewsAmount =
            <div className="card-text text-truncate">Monthly Views: {props.searchResult.monthlyViewsAmount}</div>
    }

    let weeklyViewsAmount;
    if (props.searchResult.weeklyViewsAmount || props.searchResult.weeklyViewsAmount === 0) {
        weeklyViewsAmount =
            <div className="card-text text-truncate">Weekly Views: {props.searchResult.weeklyViewsAmount}</div>
    }


    let dailyViewsAmount;
    if (props.searchResult.dailyViewsAmount || props.searchResult.dailyViewsAmount === 0) {
        dailyViewsAmount =
            <div className="card-text text-truncate">Daily Views: {props.searchResult.dailyViewsAmount}</div>
    }

    let totalViewsAmount;
    if (props.searchResult.totalViewsAmount || props.searchResult.totalViewsAmount === 0) {
        totalViewsAmount =
            <div className="card-text text-truncate">Total Views: {props.searchResult.totalViewsAmount}</div>
    }


    return (

        <div className="result col-lg-3 col-md-4 col-sm-6 col-6 position-relative">
            <div className="card scale clickable"
                style={{backgroundSize: "100% 100%", backgroundImage: "url(" + props.searchResult.thumbnailUrl + ")"}}>
                <div className="options">
                    <button className="btn btn-lg btn-add"
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
                    <div className="card-title text-uppercase">
                        <h5 className="flex-grow-1">{props.searchResult.title}</h5>
                    </div>
                    <div className="card-text text-truncate">{props.searchResult.creator}</div>
                    {monthlyViewsAmount}
                    {weeklyViewsAmount}
                    {dailyViewsAmount}
                    {totalViewsAmount}
                </div>
            </div>
        </div>

    )

}

export default VideoSearchItem;
