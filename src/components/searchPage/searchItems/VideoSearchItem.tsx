import GlobalPlayerStore from "../../../stores/GlobalPlayerStore";
import {VideoSearchItemProperties} from "../../../models/components/searchPage/VideoSearchItemProperties";
import React from "react";
import "aos/dist/aos.css";
import UserPlaylistsModalStore from "../../../stores/UserPlaylistsModalStore";

function VideoSearchItem(props: VideoSearchItemProperties): JSX.Element {

    const setPlayingGenericResult = GlobalPlayerStore(state => state.setPlayingGenericResult)

    const setShowingPlaylistsModal = UserPlaylistsModalStore(state => state.setShowingPlaylistsModal)
    const setResultToAdd = UserPlaylistsModalStore(state => state.setResultToAdd)

    function setCurrentPlayerToClickedItem() {
        setPlayingGenericResult(props.item)
    }

    return (

        <div className="result col-lg-3 col-md-4 col-sm-6 col-12 position-relative" data-aos="fade-up">
            <div className="card scale clickable"
                onClick={() => {
                    setCurrentPlayerToClickedItem()
                }}>
                <div className="options">
                    <button className="btn btn-lg btn-add"
                        type="button"
                        onClick={() => {
                            setShowingPlaylistsModal(true)
                            setResultToAdd(props.item)
                        }}
                        >
                    <i className='bx bx-plus'></i></button>
                </div>
                <img src={props.item.thumbnailUrl} className="card-img" alt="..."></img>
                <div className="card-img-overlay text-end">
                    <h5 className="card-title text-uppercase text-truncate">{props.item.title}</h5>
                    <p className="card-text text-truncate">{props.item.creator}</p>
                    {/* <p className="card-text">{props.item.createdAt}</p> */}
                </div>
            </div>
        </div>

    )

}

export default VideoSearchItem;
