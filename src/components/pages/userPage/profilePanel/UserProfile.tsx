import React, {useEffect} from 'react';
import '../../../../styles/style.css';
import {UserProfileDto} from "../../../../models/backendResponses/userRoute/UserProfileDto";
import UserRequests from "../../../../requests/backendRequests/UserRequests";
import {EditPhotoButton} from "./EditPhotoButton";
import AlertStore from "../../../../stores/AlertStore";
import BackendResponsesStore from "../../../../stores/BackendResponsesStore";
import EditUserInfoModalStore from "../../../../stores/modals/EditUserInfoModalStore";
import EditUserPasswordModalStore from "../../../../stores/modals/EditUserPasswordModalStore";
import {UserProfileProperties} from "../../../../models/components/pages/userPage/UserProfileProperties";
import FollowersModalStore from "../../../../stores/modals/FollowersModalStore";
import CommunityRequests from "../../../../requests/backendRequests/CommunityRequests";
import StatisticsModalStore from "../../../../stores/modals/StatisticsModalStore";
import toggleFollowingUserButton from "../../../../utils/following/toggleFollowingUserButton";
import SearchedCommunityResultsStore from "../../../../stores/searches/SearchedCommunityResultsStore";
import FollowingModalStore from "../../../../stores/modals/FollowingModalStore";
import {useNavigate} from "react-router-dom";
import LoginStore from "../../../../stores/LoginStore";
import {HubConnectionSingleton} from "../../../../utils/HubConnectionSingleton";

function UserProfile(props: UserProfileProperties): JSX.Element {

    const navigate = useNavigate()

    const [followingButtonShapeClass, setFollowingButtonShapeClass] = React.useState<string>()

    const [userProfile, setProfile] = React.useState<UserProfileDto>();

    const searchedCommunityResults = SearchedCommunityResultsStore(state => state.searchedCommunityResults)
    const setSearchedCommunityResults = SearchedCommunityResultsStore(state => state.setSearchedCommunityResults)

    const setIsAuthenticated = LoginStore(state => state.setIsAuthenticated)

    const prettyAlert = AlertStore(state => state.prettyAlert)

    const setModalUsername = EditUserInfoModalStore(state => state.setUsername)
    const setModalName = EditUserInfoModalStore(state => state.setName)
    const setModalEmail = EditUserInfoModalStore(state => state.setEmail)
    const setShowingEditUserInfoModal = EditUserInfoModalStore(state => state.setShowingEditUserInfoModal)

    const setShowingEditUserPasswordModal = EditUserPasswordModalStore(state => state.setShowingEditUserPasswordModal)

    const setShowingUserFollowersModal = FollowersModalStore(state => state.setShowingFollowersModal)
    const setShowingFollowersOf = FollowersModalStore(state => state.setShowingFollowersOf)

    const setShowingFollowingModal = FollowingModalStore(state => state.setShowingFollowingModal)
    const setShowingFollowingOf = FollowingModalStore(state => state.setShowingFollowingOf)

    const setShowingStatisticsOf = StatisticsModalStore(state => state.setShowingStatisticsOf)
    const setShowingStatisticsModal = StatisticsModalStore(state => state.setShowingStatisticsModal)

    const updatedUserPhotoResponse = BackendResponsesStore(state => state.updatedUserPhotoResponse)
    const setUpdatedUserPhotoResponse = BackendResponsesStore(state => state.setUpdatedUserPhotoResponse)
    const updatedUserInfoResponse = BackendResponsesStore(state => state.updatedUserInfoResponse)
    const setUpdatedUserInfoResponse = BackendResponsesStore(state => state.setUpdatedUserInfoResponse)
    const toggledFollowResponse = BackendResponsesStore(state => state.toggledFollowResponse)
    const setToggledFollowResponse = BackendResponsesStore(state => state.setToggledFollowResponse)
    const removedFollowerResponse = BackendResponsesStore(state => state.removedFollowerResponse)
    const setRemovedFollowerResponse = BackendResponsesStore(state => state.setRemovedFollowerResponse)

    const sessionToken = localStorage.getItem("sessionToken");

    useEffect(() => {
        if (userProfile?.followed) {
            setFollowingButtonShapeClass("bxs-heart")
        } else {
            setFollowingButtonShapeClass("bx-heart")
        }
    }, [userProfile])

    useEffect(() => {
        if (sessionToken) {
            (async () => {

                try {
                    setProfile(await UserRequests.getProfile(props.username, sessionToken))
                } catch (e: any) {
                    prettyAlert(e.response.data, false)
                }
            })()
        } else prettyAlert("No session token found.", false)
    }, []);

    useEffect(() => {
        if (updatedUserPhotoResponse) {
            if (sessionToken) {
                (async () => {
                    setProfile(await UserRequests.getProfile(props.username, sessionToken))
                    setUpdatedUserPhotoResponse(null)
                })()
            } else prettyAlert("No session token found.", false)
        }
    }, [updatedUserPhotoResponse]);

    useEffect(() => {
        if (updatedUserInfoResponse) {
            (async () => {
                const sessionToken = localStorage.getItem("sessionToken");
                if (sessionToken) {
                    setProfile(await UserRequests.getProfile(props.username, sessionToken))
                    setUpdatedUserInfoResponse(null)
                } else prettyAlert("No session token found.", false)
            })()
        }
    }, [updatedUserInfoResponse]);

    useEffect(() => {
        if (toggledFollowResponse) {
            if (sessionToken) {
                (async () => {
                    setProfile(await UserRequests.getProfile(props.username, sessionToken))
                    setToggledFollowResponse(null)
                })()
            } else prettyAlert("No session token found.", false)
        }
    }, [toggledFollowResponse]);

    useEffect(() => {
        if (removedFollowerResponse) {
            if (sessionToken) {
                (async () => {
                    setProfile(await UserRequests.getProfile(props.username, sessionToken))
                    setRemovedFollowerResponse(null)
                })()
            } else prettyAlert("No session token found.", false)
        }
    }, [removedFollowerResponse]);


    let dropdownMenu;
    let editPhotoButton;
    let followButton;
    let logoutButton;
    if (props.username === localStorage.getItem("username")) {
        dropdownMenu =
            <div className="btn-group">
                <button className="btn dropdown-toggle-split"
                        data-bs-toggle="dropdown" aria-expanded="false">
                    <i className='bx bx-edit-alt'></i>
                </button>
                <ul className="dropdown-menu dropdown-menu-dark">
                    <li
                        onClick={() => {
                            setModalName(userProfile?.name!)
                            setModalUsername(userProfile?.username!)
                            setModalEmail(userProfile?.email!)
                            setShowingEditUserInfoModal(true)
                        }}>
                        <div className="dropdown-item">Edit Information</div>
                    </li>
                    <li
                        onClick={() => {
                            setShowingEditUserPasswordModal(true)
                        }}>
                        <div className="dropdown-item">Edit Password</div>
                    </li>
                </ul>
            </div>
        logoutButton =
            <button className="btn text-danger"
                    onClick={async () => {
                        try {
                            localStorage.removeItem("sessionToken");
                            localStorage.removeItem("username");
                            setIsAuthenticated(false);
                            await HubConnectionSingleton.disconnectHub();
                        } catch (e: any) {
                            prettyAlert(e, false)
                        }
                    }}
            >
                <i className='bx bx-log-out text-danger'></i>
            </button>
        editPhotoButton = <EditPhotoButton/>

    } else {
        followButton = <div className="btn-group">
            <button className="btn dropdown-toggle-split"
                    data-bs-toggle="dropdown" aria-expanded="false"
                    onClick={async () => {
                        try {
                            if (userProfile) {
                                if (sessionToken) {
                                    const response = await CommunityRequests.toggleUserFollow(userProfile.username, sessionToken)
                                    prettyAlert(response, true)
                                    toggleFollowingUserButton(userProfile, followingButtonShapeClass, setFollowingButtonShapeClass, searchedCommunityResults, setSearchedCommunityResults)
                                    setToggledFollowResponse(response)
                                } else prettyAlert("You need to be logged in to follow a user", false)
                            }
                        } catch (e: any) {
                            prettyAlert(e.response.data, false)
                        }
                    }}
            >
                <i className={'bx ' + followingButtonShapeClass}></i>
            </button>
        </div>
    }

    let userPhoto
    if (userProfile) {
        userPhoto = <img src={"/" + userProfile?.profilePhotoUrl}
                         width="250"
                         height="250"
                         className="img-fluid rounded-circle"
                         onError={({currentTarget}) => {
                             currentTarget.onerror = null; // prevents looping
                             currentTarget.style.display = "none"
                         }}

        />
    }

    return (

        <div className="col-lg-4 col-md-6 col-sm-12 col-12 position-relative  mb-4">

            <div className="align-items-stretch mb-4" data-aos="zoom-in" data-aos-delay="100">

                <div className="options-dropdown">
                    <div className="btn-group icons-playlist" style={{position: "absolute", top: "0px", left: "0px"}}>
                        {dropdownMenu}
                        {followButton}
                        <button className="btn text-white"
                                onClick={() => {
                                    if (userProfile) {
                                        setShowingStatisticsModal(true)
                                        setShowingStatisticsOf(userProfile)
                                    }
                                }}
                        >
                            <i className='bx bx-info-circle'></i>
                        </button>
                        {logoutButton}
                    </div>
                </div>

                <div className="icon-box icon-box-lightblue">
                    <h3 className="text-white"><strong>{userProfile?.username}</strong></h3>
                    <h4 className="text-white">{userProfile?.name}</h4>
                    <div className="position-relative change-profile-picture">
                        {userPhoto}
                        {editPhotoButton}
                    </div>
                </div>

            </div>
            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                    <div className="icon-box icon-box-lightblue">
                        <h1>{userProfile?.viewablePlaylistsAmount!}</h1>
                        Playlists
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                    <div className="icon-box icon-box-lightblue clickable"
                         onClick={() => {
                             if (userProfile) {
                                 setShowingUserFollowersModal(true)
                                 setShowingFollowersOf(userProfile)
                             }
                         }}
                    >
                        <h1>{userProfile?.followersAmount!}</h1>
                        Followers
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                    <div className="icon-box icon-box-lightblue clickable"
                         onClick={() => {
                             if (userProfile) {
                                 setShowingFollowingModal(true)
                                 setShowingFollowingOf(userProfile)
                             }
                         }}
                    >
                        <h1>{userProfile?.followingUsersAmount!}</h1>
                        Following
                    </div>
                </div>
            </div>

        </div>


    )
}

export default UserProfile;