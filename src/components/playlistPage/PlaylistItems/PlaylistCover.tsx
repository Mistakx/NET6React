import '../../../styles/Playlist.css'
import '../../../styles/SearchPage.css'
import React, {useEffect, useState} from "react";
import "aos/dist/aos.css";
import BackendResponsesStore from "../../../stores/BackendResponsesStore";
import AOS from "aos";
import PlaylistRequests from "../../../requests/backendRequests/PlaylistRequests";
import {PlaylistBasicDetails} from "../../../models/backendRequests/PlaylistRoute/PlaylistBasicDetails";
import {PlaylistCoverProperties} from "../../../models/components/playlistPage/PlaylistCoverProperties";
import AlertStore from "../../../stores/AlertStore";

function PlaylistCover(props: PlaylistCoverProperties): JSX.Element {

    const playlistCoverChangedResponse = BackendResponsesStore(state => state.playlistCoverChangedResponse)
    const setPlaylistCoverChangedResponse = BackendResponsesStore(state => state.setPlaylistCoverChangedResponse)

    const prettyAlert = AlertStore(state => state.prettyAlert)

    const [playlistBasicDetails, setPlaylistBasicDetails] = useState<PlaylistBasicDetails>()



    useEffect(() => {

            (async () => {
                try {
                    setPlaylistBasicDetails(await PlaylistRequests.getPlaylistBasicDetails(props.playlistId!))
                } catch (e: any) {
                    prettyAlert(e.response.data, false)
                }
                setPlaylistCoverChangedResponse("")
            })()
    }, [playlistCoverChangedResponse]);


    return (

        <div className="card-profile position-relative"
             style={{backgroundSize: "100% 100%", backgroundImage: "url(" + playlistBasicDetails?.thumbnailUrl + ")"}}>

            <h2 className="text-white text-center text-wrap position-absolute top-50 start-50 translate-middle">
                {playlistBasicDetails?.title}
            </h2>

        </div>


    )

}

export default PlaylistCover;
