import GlobalPlayerStore from "../../../stores/players/GlobalPlayerStore";
import {VideoSearchItemProperties} from "../../../models/components/searchPage/VideoSearchItemProperties";
import React, {useEffect} from "react";
import "aos/dist/aos.css";
import UserPlaylistsModalStore from "../../../stores/modals/UserPlaylistsModalStore";
import {ViewAmounts} from "../../../models/backendRequests/RecommendationsRoute/ViewAmounts";
import RecommendationRequests from "../../../requests/backendRequests/RecommendationRequests";

function VideoSearchItem(props: VideoSearchItemProperties): JSX.Element {

    const setGlobalPlayerCurrentResult = GlobalPlayerStore(state => state.setGlobalPlayerCurrentResult)
    const setSearchCurrentResults = GlobalPlayerStore(state => state.setSearchCurrentResults)

    const setShowingPlaylistsModal = UserPlaylistsModalStore(state => state.setShowingPlaylistsModal)
    const setResultToAdd = UserPlaylistsModalStore(state => state.setResultToAdd)

    const [viewAmounts, setViewAmounts] = React.useState<ViewAmounts | null>(null)

    useEffect(() => {
        (async () => {
            setViewAmounts(await RecommendationRequests.getContentViews(props.searchResult.platformId, props.searchResult.playerFactoryName, props.searchResult.platformPlayerUrl))
        })()
    }, [])
    
    function setCurrentPlayerToClickedItem() {
        setGlobalPlayerCurrentResult(props.searchResult)
        setSearchCurrentResults(props.searchResults)
    }

    return (

        <div className="result col-lg-3 col-md-4 col-sm-6 col-6 position-relative" data-aos="fade-up">
            <div className="card scale clickable"
                 onClick={() => {
                     setCurrentPlayerToClickedItem()
                 }}
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
                <div className="card-img-overlay text-end">
                    <h5 className="card-title text-uppercase text-truncate">{props.searchResult.title}</h5>
                    <p className="card-text text-truncate">{props.searchResult.creator}</p>
                    <p className="card-text text-truncate">Weekly Views: {viewAmounts?.weeklyViewsAmount}</p>
                    <p className="card-text text-truncate">Total Views: {viewAmounts?.totalViewsAmount}</p>
                </div>
            </div>
        </div>

    )

}

export default VideoSearchItem;
