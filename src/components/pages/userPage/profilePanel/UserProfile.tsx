import React, {useEffect} from 'react';
import '../../../../styles/style.css';
import {UserProfileDto} from "../../../../models/backendResponses/userRoute/UserProfileDto";
import UserRequests from "../../../../requests/backendRequests/UserRequests";
import {EditPhotoButton} from "./EditPhotoButton";
import AlertStore from "../../../../stores/AlertStore";
import BackendResponsesStore from "../../../../stores/BackendResponsesStore";
import EditUserInfoModalStore from "../../../../stores/modals/EditUserInfoModalStore";
import EditUserInfoModal from "./EditUserInfoModal";
import EditUserPasswordModalStore from "../../../../stores/modals/EditUserPasswordModalStore";
import EditUserPasswordModal from "./EditUserPasswordModal";
import {UserProfileProperties} from "../../../../models/components/pages/userPage/UserProfileProperties";
import FollowersModal from "../../../modals/userFollowersModal/FollowersModal";
import FollowersModalStore from "../../../../stores/modals/FollowersModalStore";
import CommunityRequests from "../../../../requests/backendRequests/CommunityRequests";

function UserProfile(props: UserProfileProperties): JSX.Element {


    const [followingButtonShapeClass, setFollowingButtonShapeClass] = React.useState<string>()

    const [userProfile, setProfile] = React.useState<UserProfileDto>();

    const prettyAlert = AlertStore(state => state.prettyAlert)


    const setModalUsername = EditUserInfoModalStore(state => state.setUsername)
    const setModalName = EditUserInfoModalStore(state => state.setName)
    const setModalEmail = EditUserInfoModalStore(state => state.setEmail)
    const setShowingEditUserInfoModal = EditUserInfoModalStore(state => state.setShowingEditUserInfoModal)

    const setShowingEditUserPasswordModal = EditUserPasswordModalStore(state => state.setShowingEditUserPasswordModal)

    const setShowingUserFollowersModal = FollowersModalStore(state => state.setShowingFollowersModal)
    const setShowingFollowersOf = FollowersModalStore(state => state.setShowingFollowersOf)

    const updatedUserPhotoResponse = BackendResponsesStore(state => state.updatedUserPhotoResponse)
    const setUpdatedUserPhotoResponse = BackendResponsesStore(state => state.setUpdatedUserPhotoResponse)
    const updatedUserInfoResponse = BackendResponsesStore(state => state.updatedUserInfoResponse)
    const setUpdatedUserInfoResponse = BackendResponsesStore(state => state.setUpdatedUserInfoResponse)
    const toggledFollowResponse = BackendResponsesStore(state => state.toggledFollowResponse)
    const setToggledFollowResponse = BackendResponsesStore(state => state.setToggledFollowResponse)

    useEffect(() => {
        if (userProfile?.followed) {
            setFollowingButtonShapeClass("bxs-heart")
        } else {
            setFollowingButtonShapeClass("bx-heart")
        }
    }, [userProfile])

    useEffect(() => {

        (async () => {

            setShowingUserFollowersModal(false)
            setShowingEditUserPasswordModal(false)
            setShowingEditUserInfoModal(false)

            const sessionToken = window.sessionStorage.getItem("sessionToken");
            if (sessionToken) {
                try {
                    setProfile(await UserRequests.getProfile(props.username, sessionToken))
                } catch (e: any) {
                    prettyAlert(e.response?.data || e.toJSON().message, false)
                }
            } else prettyAlert("No session token found.", false)
        })()

    }, []);

    useEffect(() => {
        if (updatedUserPhotoResponse) {
            (async () => {
                const sessionToken = window.sessionStorage.getItem("sessionToken");
                if (sessionToken) {
                    setProfile(await UserRequests.getProfile(props.username, sessionToken))
                    setUpdatedUserPhotoResponse(null)
                } else prettyAlert("No session token found.", false)
            })()
        }
    }, [updatedUserPhotoResponse]);

    useEffect(() => {
        if (updatedUserInfoResponse) {
            (async () => {
                const sessionToken = window.sessionStorage.getItem("sessionToken");
                if (sessionToken) {
                    setProfile(await UserRequests.getProfile(props.username, sessionToken))
                    setUpdatedUserInfoResponse(null)
                } else prettyAlert("No session token found.", false)
            })()
        }
    }, [updatedUserInfoResponse]);

    useEffect(() => {
        if (toggledFollowResponse) {
            (async () => {
                const sessionToken = window.sessionStorage.getItem("sessionToken");
                if (sessionToken) {
                    setProfile(await UserRequests.getProfile(props.username, sessionToken))
                    setToggledFollowResponse(null)
                } else prettyAlert("No session token found.", false)
            })()
        }
    }, [toggledFollowResponse]);


    let editUserInfoModal;
    let editUserPasswordModal;
    let dropdownMenu;
    let editPhotoButton;
    let followButton;
    if (props.username === window.sessionStorage.getItem("username")) {
        editUserInfoModal = <EditUserInfoModal/>
        editUserPasswordModal = <EditUserPasswordModal/>
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
        editPhotoButton = <><EditPhotoButton/><EditPhotoButton/></>
    } else {
        followButton = <div className="btn-group">
            <button className="btn dropdown-toggle-split"
                    data-bs-toggle="dropdown" aria-expanded="false"
                    onClick={async () => {
                        try {
                            const sessionToken = window.sessionStorage.getItem("sessionToken")
                            if (userProfile && sessionToken) {
                                const response = await CommunityRequests.toggleUserFollow(userProfile.username, sessionToken)
                                prettyAlert(response, true)
                                if (followingButtonShapeClass === "bxs-heart") {
                                    setFollowingButtonShapeClass("bx-heart")
                                } else if (followingButtonShapeClass === "bx-heart") {
                                    setFollowingButtonShapeClass("bxs-heart")
                                }
                                setToggledFollowResponse(response)
                            } else prettyAlert("You need to be logged in to follow a user", false)
                        } catch (e: any) {
                            prettyAlert(e.response?.data || e.toJSON().message, false)
                        }
                    }}
            >
                <i className={'bx ' + followingButtonShapeClass}></i>
            </button>
        </div>
    }

    return (

        <div className="col-lg-4 col-md-6 col-sm-12 col-12 position-relative">

            {editUserInfoModal}
            {editUserPasswordModal}
            <FollowersModal/>

            <div className="align-items-stretch mb-4 " data-aos="zoom-in" data-aos-delay="100">

                <div className="position-absolute top-0 end-0 me-2 mt-2">
                    <button className="btn text-white"
                            onClick={() => {
                                if (userProfile) {
                                    setShowingUserFollowersModal(true)
                                    setShowingFollowersOf(userProfile)
                                }
                            }}
                    >
                        <i className='bx bxs-user-detail h1 p-0'></i>
                    </button>
                </div>

                <div className="options-top mr-5 mb-5">
                    <div className="options-dropdown">
                        {dropdownMenu}
                        {followButton}
                    </div>
                </div>

                <div className="icon-box icon-box-lightblue">
                    <h3 className="text-white"><strong>{userProfile?.name}</strong></h3>
                    <h4 className="text-white">{userProfile?.username}</h4>
                    <img src={"/" + userProfile?.profilePhotoUrl}
                         width="250"
                         className="img-fluid rounded-circle img-centered"/>
                    {editPhotoButton}
                </div>


            </div>
        </div>


    )
}

export default UserProfile;