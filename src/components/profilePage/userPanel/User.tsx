import React, {useEffect} from 'react';
import '../../../styles/style.css';
import {UserProfile} from "../../../models/backendRequests/UserRoute/UserProfile";
import UserRequests from "../../../requests/backendRequests/UserRequests";
import {EditPhotoButton} from "./EditPhotoButton";
import AlertStore from "../../../stores/AlertStore";
import BackendResponsesStore from "../../../stores/BackendResponsesStore";
import EditUserInfoModalStore from "../../../stores/EditUserInfoModalStore";
import EditUserInfoModal from "./EditUserInfoModal";
import EditUserPasswordModalStore from "../../../stores/EditUserPasswordModal";
import EditUserPasswordModal from "./EditUserPasswordModal";

function User(): JSX.Element {

    const prettyAlert = AlertStore(state => state.prettyAlert)

    const [userProfile, setProfile] = React.useState<UserProfile>();

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
                    setProfile(await UserRequests.getProfile(sessionToken))
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
                    setProfile(await UserRequests.getProfile(sessionToken))
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
                    setProfile(await UserRequests.getProfile(sessionToken))
                    setUpdatedUserInfoResponse(null)
                } else prettyAlert("No session token found.", false)
            })()
        }
    }, [updatedUserInfoResponse]);

    return (

        <div className="col-md-4 position-relative">

            <EditUserInfoModal/>
            <EditUserPasswordModal/>
            <div className="align-items-stretch mb-4 " data-aos="zoom-in" data-aos-delay="100">

                <div className="options-top mr-5 mb-5">

                    {/*<button className="btn text-white"*/}
                    {/*        onClick={() => {*/}
                    {/*            setModalName(userProfile?.name!)*/}
                    {/*            setModalUsername(userProfile?.username!)*/}
                    {/*            setModalEmail(userProfile?.email!)*/}
                    {/*            setShowingEditUserInfoModal(true)*/}
                    {/*        }}*/}
                    {/*>*/}
                    {/*    <i className='bx bx-edit-alt'></i>*/}
                    {/*</button>*/}

                    <div className="options-dropdown">
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
                    </div>

                </div>


                <div className="icon-box icon-box-lightblue">
                    <h3 className="text-white"><strong>{userProfile?.name}</strong></h3>
                    <h4 className="text-white">{userProfile?.username}</h4>
                    <h6 className="text-white">({userProfile?.email})</h6>
                    <img src={userProfile?.profilePhotoUrl}
                         width="250"
                         className="img-fluid rounded-circle img-centered"/>
                    <EditPhotoButton/>
                </div>


            </div>
        </div>


    )
}

export default User