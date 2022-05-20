import '../../styles/Playlist.css'
import '../../styles/SearchPage.css'
import React, {useEffect} from "react";
import "aos/dist/aos.css";
import {PlaylistTitleProperties} from "../../models/components/playlistPage/PlaylistTitleProperties";
import BackendResponsesStore from "../../stores/BackendResponsesStore";

function PlaylistCover(props: PlaylistTitleProperties): JSX.Element {

    const playlistCoverChangedResponse = BackendResponsesStore(state => state.playlistCoverChangedResponse)
    const setPlaylistCoverChangedResponse = BackendResponsesStore(state => state.setPlaylistCoverChangedResponse)

    useEffect(() => {
        if (playlistCoverChangedResponse) {
            (async () => {
                setPlaylistCoverChangedResponse("")
            })()
        }
    }, [playlistCoverChangedResponse]);

    return (

        <div className="card-profile position-relative"
             style={{backgroundSize: "100% 100%", backgroundImage: "url(" + props.playlistBasicDetails?.thumbnailUrl + ")"}}>

            <h2 className="text-white text-center text-wrap position-absolute top-50 start-50 translate-middle">
                {props.playlistBasicDetails?.title}
            </h2>

        </div>


    )

}

export default PlaylistCover;
