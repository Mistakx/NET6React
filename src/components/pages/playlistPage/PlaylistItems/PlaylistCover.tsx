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
import PlaylistDropdownMenu from "../../../dropdownMenus/PlaylistDropdownMenu";
import FollowersModalStore from "../../../../stores/modals/FollowersModalStore";
import CommunityRequests from "../../../../requests/backendRequests/CommunityRequests";
import StatisticsModalStore from "../../../../stores/modals/StatisticsModalStore";

function PlaylistCover(props: PlaylistCoverProperties): JSX.Element {

    const [followingButtonShapeClass, setFollowingButtonShapeClass] = React.useState<string>()

    const [playlistBasicDetails, setPlaylistBasicDetails] = useState<PlaylistDto>()

    let navigate = useNavigate();

    const setShowingFollowersModal = FollowersModalStore(state => state.setShowingFollowersModal)
    const setShowingFollowersOf = FollowersModalStore(state => state.setShowingFollowersOf)

    const setShowingStatisticsOf = StatisticsModalStore(state => state.setShowingStatisticsOf)
    const setShowingStatisticsModal = StatisticsModalStore(state => state.setShowingStatisticsModal)

    const playlistCoverChangedResponse = BackendResponsesStore(state => state.playlistCoverChangedResponse)
    const setPlaylistCoverChangedResponse = BackendResponsesStore(state => state.setPlaylistCoverChangedResponse)

    const deletePlaylistResponse = BackendResponsesStore(state => state.deletePlaylistResponse)
    const setDeletePlaylistResponse = BackendResponsesStore(state => state.setDeletePlaylistResponse)

    const resetCoverResponse = BackendResponsesStore(state => state.resetCoverResponse)
    const setResetCoverResponse = BackendResponsesStore(state => state.setResetCoverResponse)

    const setEditPlaylistResponse = BackendResponsesStore(state => state.setEditPlaylistResponse)
    const editPlaylistResponse = BackendResponsesStore(state => state.editPlaylistResponse)

    const toggledFollowResponse = BackendResponsesStore(state => state.toggledFollowResponse)
    const setToggledFollowResponse = BackendResponsesStore(state => state.setToggledFollowResponse)


    const prettyAlert = AlertStore(state => state.prettyAlert)

    useEffect(() => {
        if (playlistBasicDetails?.followed) {
            setFollowingButtonShapeClass("bxs-heart")
        } else {
            setFollowingButtonShapeClass("bx-heart")
        }
    }, [playlistBasicDetails])

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

    useEffect(() => {
        if (deletePlaylistResponse) {
            (async () => {
                try {
                    setPlaylistBasicDetails(await PlaylistRequests.getPlaylistInformation(props.playlistId, window.sessionStorage.getItem("sessionToken")!))
                    navigate(-1)
                } catch (e: any) {
                    prettyAlert(e.response?.data || e.toJSON().message, false)
                }
                setDeletePlaylistResponse("")
            })()
        }
    }, [deletePlaylistResponse]);

    useEffect(() => {
        if (resetCoverResponse) {
            (async () => {
                try {
                    setPlaylistBasicDetails(await PlaylistRequests.getPlaylistInformation(props.playlistId, window.sessionStorage.getItem("sessionToken")!))
                } catch (e: any) {
                    prettyAlert(e.response?.data || e.toJSON().message, false)
                }
                setResetCoverResponse("")
            })()
        }
    }, [resetCoverResponse]);

    useEffect(() => {
        if (editPlaylistResponse) {
            (async () => {
                try {
                    setPlaylistBasicDetails(await PlaylistRequests.getPlaylistInformation(props.playlistId, window.sessionStorage.getItem("sessionToken")!))
                } catch (e: any) {
                    prettyAlert(e.response?.data || e.toJSON().message, false)
                }
                setEditPlaylistResponse("")
            })()
        }
    }, [editPlaylistResponse]);

    useEffect(() => {
        if (toggledFollowResponse) {
            (async () => {
                try {
                    setPlaylistBasicDetails(await PlaylistRequests.getPlaylistInformation(props.playlistId, window.sessionStorage.getItem("sessionToken")!))
                } catch (e: any) {
                    prettyAlert(e.response?.data || e.toJSON().message, false)
                }
                setToggledFollowResponse("")
            })()
        }
    }, [toggledFollowResponse]);

    function toggleFollowButton() {
        if (followingButtonShapeClass === "bxs-heart") {
            setFollowingButtonShapeClass("bx-heart")
        } else if (followingButtonShapeClass === "bx-heart") {
            setFollowingButtonShapeClass("bxs-heart")
        }
    }

    let ownerButton;
    if (playlistBasicDetails?.owner != null) {

        ownerButton = <button className="btn btn-lg btn-user"
                              type="button" style={{
            backgroundSize: "100% 100%",
            backgroundImage: "url(/" + playlistBasicDetails.owner.profilePhotoUrl + ")"
        }}
                              onClick={() => {
                                  navigate(`/user/${playlistBasicDetails.owner?.username}`)
                              }}
        >
            <i className='bx bx-user'></i>
        </button>
    }

    let playlistDropdown;
    if (playlistBasicDetails?.owner === null) {
        playlistDropdown = <PlaylistDropdownMenu basicDetails={playlistBasicDetails}/>
    }

    let followButton;
    if (playlistBasicDetails?.owner != null) {
        followButton = <button type="button" className="btn dropdown-toggle-split"
           onClick={async () => {
               try {
                   const sessionToken = window.sessionStorage.getItem("sessionToken")
                   if (playlistBasicDetails && sessionToken) {
                       const response = await CommunityRequests.togglePlaylistFollow(playlistBasicDetails.id, sessionToken)
                       prettyAlert(response, true)
                       toggleFollowButton()
                       setToggledFollowResponse(response)
                   } else prettyAlert("You need to be logged in to follow a user", false)
               } catch (e: any) {
                   prettyAlert(e.response?.data || e.toJSON().message, false)
               }
           }}
        >
            <i className={'bx ' + followingButtonShapeClass}></i>
        </button>
    }

    return (

        <div>


            <div className="card-profile position-relative"
                 style={{
                     backgroundColor: "#0678e3",
                     backgroundSize: "100% auto",
                     backgroundPosition: "center",
                     backgroundImage: "url(" + playlistBasicDetails?.thumbnailUrl + ")"
                 }}>

                <h2 className="text-white text-center text-wrap position-absolute top-50 start-50 translate-middle">
                    {playlistBasicDetails?.title}
                </h2>

                {playlistDropdown}

                <div className="options-dropdown-right">
                    <div className="btn-group" style={{position: "absolute", top: "10px", right: "10px"}}>

                        {followButton}

                        <button type="button" className="btn dropdown-toggle-split"
                                onClick={() => {
                                    if (playlistBasicDetails) {
                                        setShowingFollowersModal(true)
                                        setShowingFollowersOf(playlistBasicDetails)
                                    }
                                }}
                        >
                            <i className='bx bxs-user-detail'></i>
                        </button>

                        <button type="button" className="btn dropdown-toggle-split"
                                onClick={() => {
                                    if (playlistBasicDetails) {
                                        setShowingStatisticsModal(true)
                                        setShowingStatisticsOf(playlistBasicDetails)
                                    }
                                }}
                        >
                            <i className='bx bx-info-circle'></i>
                        </button>

                        {ownerButton}


                    </div>
                </div>


            </div>

        </div>
    )

}

export default PlaylistCover;
