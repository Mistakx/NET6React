import React, {useEffect} from 'react';
import '../../../styles/style.css';
import {UserProfileDto} from "../../../models/backendResponses/userRoute/UserProfileDto";
import UserRequests from "../../../requests/backendRequests/UserRequests";
import {EditPhotoButton} from "./EditPhotoButton";
import AlertStore from "../../../stores/AlertStore";
import BackendResponsesStore from "../../../stores/BackendResponsesStore";
import EditUserInfoModalStore from "../../../stores/modals/EditUserInfoModalStore";
import EditUserInfoModal from "./EditUserInfoModal";
import EditUserPasswordModalStore from "../../../stores/modals/EditUserPasswordModalStore";
import EditUserPasswordModal from "./EditUserPasswordModal";
import {UserProfileProperties} from "../../../models/components/userPage/UserProfileProperties";

function UserProfile(props: UserProfileProperties): JSX.Element {

    const prettyAlert = AlertStore(state => state.prettyAlert)

    const [userProfile, setProfile] = React.useState<UserProfileDto>();

    const setModalUsername = EditUserInfoModalStore(state => state.setUsername)
    const setModalName = EditUserInfoModalStore(state => state.setName)
    const setModalEmail = EditUserInfoModalStore(state => state.setEmail)
    const setShowingEditUserInfoModal = EditUserInfoModalStore(state => state.setShowingEditUserInfoModal)

    const setShowingEditUserPasswordModal = EditUserPasswordModalStore(state => state.setShowingEditUserPasswordModal)

    const updatedUserPhotoResponse = BackendResponsesStore(state => state.updatedUserPhotoResponse)
    const setUpdatedUserPhotoResponse = BackendResponsesStore(state => state.setUpdatedUserPhotoResponse)
    const updatedUserInfoResponse = BackendResponsesStore(state => state.updatedUserInfoResponse)
    const setUpdatedUserInfoResponse = BackendResponsesStore(state => state.setUpdatedUserInfoResponse)

    useEffect(() => {
        (async () => {
            const sessionToken = window.sessionStorage.getItem("sessionToken");
            if (sessionToken) {
                try {
                    setProfile(await UserRequests.getProfile(props.username, sessionToken))
                } catch (e: any) {
                    prettyAlert(e.response?.data || e.toJSON().message, false)
                }
            } else prettyAlert("No session token found.", false)
        })()
    }, [props.username]);

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

    let editUserInfoModal;
    let editUserPasswordModal;
    let dropdownMenu;
    let editPhotoButton;
    if (props.username === window.sessionStorage.getItem("username")) {
        editUserInfoModal = <EditUserInfoModal/>
        dropdownMenu = <div className="options-top mr-5 mb-5">
            <div className="options-dropdown">
                
                <button className="btn" type="button" data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"
                onClick={() => {
                        setModalName(userProfile?.name!)
                        setModalUsername(userProfile?.username!)
                        setModalEmail(userProfile?.email!)
                        setShowingEditUserInfoModal(true)
                        setShowingEditUserPasswordModal(true)
                    }}>
                    <i className='bx bx-edit-alt'></i>
                </button>

                {/* <div className="btn-group">
                    <button className="btn dropdown-toggle-split"
                            data-bs-toggle="dropdown" aria-expanded="false">
                        <i className='bx bx-edit-alt'></i>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-dark">
                        <li
                            >
                            <div className="dropdown-item">Edit Information</div>
                        </li>
                        <li
                            onClick={() => {
                            }}>
                            <div className="dropdown-item">Edit Password</div>
                        </li>
                    </ul>
                </div> */}

            </div>
        </div>
        editPhotoButton = <><EditPhotoButton/><EditPhotoButton/></>
    }

    return (

        <div className="col-lg-4 col-md-6 col-sm-12 col-12 position-relative">

            {editUserInfoModal}
            {editUserPasswordModal}

            <div className="align-items-stretch mb-4 " data-aos="zoom-in" data-aos-delay="100">

                {dropdownMenu}

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