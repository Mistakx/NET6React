import GlobalPlayerStore from "../../../stores/GlobalPlayerStore";
import {VideoSearchItemProperties} from "../../../models/components/searchPage/VideoSearchItemProperties";
import React from "react";
import "aos/dist/aos.css";
import UserPlaylistsModalStore from "../../../stores/UserPlaylistsModalStore";

function VideoSearchItem(props: VideoSearchItemProperties): JSX.Element {

    const setGlobalPlayerCurrentResult = GlobalPlayerStore(state => state.setGlobalPlayerCurrentResult)
    const setSearchCurrentResults = GlobalPlayerStore(state => state.setSearchCurrentResults)

    const setShowingPlaylistsModal = UserPlaylistsModalStore(state => state.setShowingPlaylistsModal)
    const setResultToAdd = UserPlaylistsModalStore(state => state.setResultToAdd)

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
                    {/* <p className="card-text">{props.item.createdAt}</p> */}
                </div>
            </div>
        </div>

    )

}

export default VideoSearchItem;
