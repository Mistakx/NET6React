import '../../../../styles/Playlist.css'
import '../../../../styles/SearchPage.css'
import React, {useEffect, useState} from "react";
import "aos/dist/aos.css";
import BackendResponsesStore from "../../../../stores/BackendResponsesStore";
import PlaylistRequests from "../../../../requests/backendRequests/PlaylistRequests";
import {PlaylistDto} from "../../../../models/backendRequests/PlaylistRoute/PlaylistDto";
import {PlaylistCoverProperties} from "../../../../models/components/pages/playlistPage/PlaylistCoverProperties";
import AlertStore from "../../../../stores/AlertStore";
import PlaylistDropdownMenu from "../../../dropdownMenus/PlaylistDropdownMenu";
import FollowersModalStore from "../../../../stores/modals/FollowersModalStore";
import CommunityRequests from "../../../../requests/backendRequests/CommunityRequests";
import StatisticsModalStore from "../../../../stores/modals/StatisticsModalStore";
import toggleFollowingPlaylistButton from "../../../../utils/following/toggleFollowingPlaylistButton";
import SearchedCommunityResultsStore from "../../../../stores/searches/SearchedCommunityResultsStore";
import {useNavigate} from "react-router-dom";

function PlaylistCover(props: PlaylistCoverProperties): JSX.Element {

    let navigate = useNavigate();

    const [followingButtonShapeClass, setFollowingButtonShapeClass] = React.useState<string>()

    const [playlistBasicDetails, setPlaylistBasicDetails] = useState<PlaylistDto>()

    const searchedCommunityResults = SearchedCommunityResultsStore(state => state.searchedCommunityResults)
    const setSearchedCommunityResults = SearchedCommunityResultsStore(state => state.setSearchedCommunityResults)

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

    let sessionToken = localStorage.getItem("sessionToken")

    useEffect(() => {
        if (playlistBasicDetails?.followed) {
            setFollowingButtonShapeClass("bxs-heart")
        } else {
            setFollowingButtonShapeClass("bx-heart")
        }
    }, [playlistBasicDetails])

    useEffect(() => {
        if (sessionToken) {
            (async () => {
                try {
                    setPlaylistBasicDetails(await PlaylistRequests.getPlaylistInformation(props.playlistId, sessionToken))
                } catch (e: any) {
                    prettyAlert(e.response.data, false)
                }
            })()
        } else {
            prettyAlert("You must be logged in to view the playlist cover", false)
        }
    }, []);

    useEffect(() => {
        if (playlistCoverChangedResponse) {
            if (sessionToken) {
                (async () => {
                    try {
                        setPlaylistBasicDetails(await PlaylistRequests.getPlaylistInformation(props.playlistId, sessionToken))
                    } catch (e: any) {
                        prettyAlert(e.response.data, false)
                    }
                    setPlaylistCoverChangedResponse("")
                })()
            } else {
                prettyAlert("You must be logged in to view the playlist cover", false)
            }
        }
    }, [playlistCoverChangedResponse]);

    useEffect(() => {
        if (deletePlaylistResponse) {
            if (sessionToken) {
                (async () => {
                    try {
                        setPlaylistBasicDetails(await PlaylistRequests.getPlaylistInformation(props.playlistId, sessionToken))
                        navigate(-1)
                    } catch (e: any) {
                        prettyAlert(e.response.data, false)
                    }
                    setDeletePlaylistResponse("")
                })()
            } else {
                prettyAlert("You must be logged in to view the playlist cover", false)
            }
        }
    }, [deletePlaylistResponse]);

    useEffect(() => {
        if (resetCoverResponse) {
            if (sessionToken) {
                (async () => {
                    try {
                        setPlaylistBasicDetails(await PlaylistRequests.getPlaylistInformation(props.playlistId, sessionToken))
                    } catch (e: any) {
                        prettyAlert(e.response.data, false)
                    }
                    setResetCoverResponse("")
                })()
            } else {
                prettyAlert("You must be logged in to view the playlist cover", false)
            }
        }
    }, [resetCoverResponse]);

    useEffect(() => {
        if (editPlaylistResponse) {
            if (sessionToken) {
                (async () => {
                    try {
                        setPlaylistBasicDetails(await PlaylistRequests.getPlaylistInformation(props.playlistId, sessionToken))
                    } catch (e: any) {
                        prettyAlert(e.response.data, false)
                    }
                    setEditPlaylistResponse("")
                })()
            } else {
                prettyAlert("You must be logged in to view the playlist cover", false)
            }
        }
    }, [editPlaylistResponse]);

    useEffect(() => {
        if (toggledFollowResponse) {
            if (sessionToken) {
                (async () => {
                    try {
                        setPlaylistBasicDetails(await PlaylistRequests.getPlaylistInformation(props.playlistId, sessionToken))
                    } catch (e: any) {
                        prettyAlert(e.response.data, false)
                    }
                    setToggledFollowResponse("")
                })()
            } else {
                prettyAlert("You must be logged in to view the playlist cover", false)
            }
        }
    }, [toggledFollowResponse]);

    let ownerButton;
    if (playlistBasicDetails?.owner != null) {

        ownerButton = <button className="btn btn-lg btn-user"
                              title="Disabled tooltip"
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
        followButton =
            <button type="button" className="btn dropdown-toggle-split"
                    onClick={async () => {
                        if (playlistBasicDetails) {
                            if (sessionToken) {
                                try {

                                    const response = await CommunityRequests.togglePlaylistFollow(playlistBasicDetails.id, sessionToken)
                                    prettyAlert(response, true)
                                    toggleFollowingPlaylistButton(playlistBasicDetails, followingButtonShapeClass, setFollowingButtonShapeClass, searchedCommunityResults, setSearchedCommunityResults)
                                    setToggledFollowResponse(response)
                                } catch (e: any) {
                                    prettyAlert(e.response.data, false)
                                }
                            } else prettyAlert("You need to be logged in to follow a user", false)
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
                <div className="bg-dark rounded" style={{width: "100%", height: "100%"}}>

                    <h2 className="text-white text-center text-wrap position-absolute top-50 start-50 translate-middle">
                        {playlistBasicDetails?.title}
                    </h2>

                    {playlistDropdown}
                </div>

                <div className="options-dropdown-right">
                    <div className="btn-group icons-playlist"
                         style={{position: "absolute", top: "10px", right: "10px"}}>

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
