import '../../../../styles/Playlist.css'
import '../../../../styles/SearchPage.css'
import React, {useEffect, useState} from "react";
import "aos/dist/aos.css";
import BackendResponsesStore from "../../../../stores/BackendResponsesStore";
import PlaylistRequests from "../../../../requests/backendRequests/PlaylistRequests";
import {PlaylistDto} from "../../../../models/backendRequests/PlaylistRoute/PlaylistDto";
import {PlaylistCoverProperties} from "../../../../models/components/pages/playlistPage/PlaylistCoverProperties";
import AlertStore from "../../../../stores/AlertStore";
import {useNavigate} from "react-router-dom";
import PlaylistContentDropdown from "./PlaylistContentDropdown";

function PlaylistCover(props: PlaylistCoverProperties): JSX.Element {

    const playlistCoverChangedResponse = BackendResponsesStore(state => state.playlistCoverChangedResponse)
    const setPlaylistCoverChangedResponse = BackendResponsesStore(state => state.setPlaylistCoverChangedResponse)

    const prettyAlert = AlertStore(state => state.prettyAlert)

    const [playlistBasicDetails, setPlaylistBasicDetails] = useState<PlaylistDto>()

    const navigate = useNavigate()

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


    let ownerButton;
    if (playlistBasicDetails?.owner != null) {
        {/*<button type="button" className="btn dropdown-toggle-split"*/}
        {/*    style*/}
        {/*>*/}
        {/*    <i className='bx'></i>*/}
        {/*</button>*/}

        ownerButton = <button className="btn btn-lg btn-user"
                type="button" style={{
            backgroundSize: "100% 100%",
            backgroundImage: "url(" + playlistBasicDetails.owner.profilePhotoUrl + ")"
        }}
                onClick={() => {
                    navigate(`/user/${playlistBasicDetails.owner.username}`)
                }}
        >
            <i className='bx bx-user'></i>
        </button>
    }

    return (

        <div className="card-profile position-relative"
             style={{backgroundColor: "#0678e3", backgroundSize: "100% auto", backgroundPosition: "center", backgroundImage: "url(" + playlistBasicDetails?.thumbnailUrl + ")"}}>

            <h2 className="text-white text-center text-wrap position-absolute top-50 start-50 translate-middle">
                {playlistBasicDetails?.title}
            </h2>

            {/*<div className="options-dropdown">*/}
            {/*    <div className="btn-group">*/}
            
            {/*        <button type="button" className="btn dropdown-toggle-split"*/}
            {/*                data-bs-toggle="dropdown" aria-expanded="false">*/}
            {/*            <i className='bx bx-dots-horizontal-rounded'></i>*/}
            {/*        </button>*/}
            {/*        <ul className="dropdown-menu dropdown-menu-dark">*/}
            {/*            <li>*/}
            {/*                <div className="dropdown-item">Edit</div>*/}
            {/*            </li>*/}
            {/*            <li>*/}
            {/*                <div className="dropdown-item">Reset cover</div>*/}
            {/*            </li>*/}
            {/*            <li>*/}
            {/*                <div className="dropdown-item text-danger">Delete</div>*/}
            {/*            </li>*/}
            {/*        </ul>*/}
            
            {/*    </div>*/}
            {/*</div>*/}

            <div className="options-dropdown-right">
                <div className="btn-group" style={{position: "absolute", top: "10px", right: "10px"}}>

                    <button type="button" className="btn dropdown-toggle-split">
                        <i className='bx bx-heart'></i>
                    </button>

                    <button type="button" className="btn dropdown-toggle-split">
                        <i className='bx bxs-user-detail'></i>
                    </button>

                    {ownerButton}


                </div>
            </div>


        </div>


    )

}

export default PlaylistCover;
