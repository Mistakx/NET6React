import GlobalPlayerStore from "../../../stores/GlobalPlayerStore";
import {VideoSearchItemProperties} from "../../../models/components/searchPage/VideoSearchItemProperties";
import React from "react";
import "aos/dist/aos.css";
import PlaylistsModalStore from "../../../stores/PlaylistsModalStore";

function VideoSearchItem(props: VideoSearchItemProperties): JSX.Element {

    const setPlayingGenericResult = GlobalPlayerStore(state => state.setPlayingGenericResult)

    const setShowingPlaylistsModal = PlaylistsModalStore(state => state.setShowingPlaylistsModal)
    const setResultToAdd = PlaylistsModalStore(state => state.setResultToAdd)

    function setCurrentPlayerToClickedItem() {
        setPlayingGenericResult(props.item)
    }

    return (

        <div className="col-lg-3 col-md-4 col-sm-4 col-6 position-relative scale" data-aos="fade-up">

            <div className="clickable card bg-dark"
                 onClick={() => {
                     setCurrentPlayerToClickedItem()
                 }}
                 style={{backgroundSize: "100% 100%", backgroundImage: "url(" + props.item.thumbnailUrl + ")"}}>
                <div className="card-img-overlay text-end">
                    <h5 className="card-title text-uppercase text-truncate">{props.item.title}</h5>
                    <p className="card-text text-truncate">{props.item.creator}</p>
                    {/* <p className="card-text">{props.item.createdAt}</p> */}
                </div>

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
            </div>

        </div>

    )

}

export default VideoSearchItem;
