import '../../../styles/Playlist.css'
import '../../../styles/SearchPage.css'
import React, {useEffect, useState} from "react";
import "aos/dist/aos.css";
import BackendResponsesStore from "../../../stores/BackendResponsesStore";
import PlaylistRequests from "../../../requests/backendRequests/PlaylistRequests";
import {PlaylistDto} from "../../../models/backendRequests/PlaylistRoute/PlaylistDto";
import {PlaylistCoverProperties} from "../../../models/components/playlistPage/PlaylistCoverProperties";
import AlertStore from "../../../stores/AlertStore";

function PlaylistCover(props: PlaylistCoverProperties): JSX.Element {

    const playlistCoverChangedResponse = BackendResponsesStore(state => state.playlistCoverChangedResponse)
    const setPlaylistCoverChangedResponse = BackendResponsesStore(state => state.setPlaylistCoverChangedResponse)

    const prettyAlert = AlertStore(state => state.prettyAlert)

    const [playlistBasicDetails, setPlaylistBasicDetails] = useState<PlaylistDto>()

    useEffect(() => {
            (async () => {
                try {
                    setPlaylistBasicDetails(await PlaylistRequests.getPlaylistInformation(props.playlistId, window.sessionStorage.getItem("sessionToken")!))
                } catch (e: any) {
                    prettyAlert(e.response?.data || e.toJSON().message, false)
                }
            })()
    }, []);

    useEffect(() => {
        if (playlistCoverChangedResponse) {
            (async () => {
                try {
                    setPlaylistBasicDetails(await PlaylistRequests.getPlaylistInformation(props.playlistId, window.sessionStorage.getItem("sessionToken")!))
                } catch (e: any) {
                    prettyAlert(e.response?.data || e.toJSON().message, false)
                }
                setPlaylistCoverChangedResponse("")
            })()
        }
    }, [playlistCoverChangedResponse]);

    return (

        <div className="card-profile position-relative"
             style={{backgroundSize: "100% auto", backgroundPosition: "center", backgroundImage: "url(" + playlistBasicDetails?.thumbnailUrl + ")"}}>

            <h2 className="text-white text-center text-wrap position-absolute top-50 start-50 translate-middle">
                {playlistBasicDetails?.title}
            </h2>

        </div>


    )

}

export default PlaylistCover;
