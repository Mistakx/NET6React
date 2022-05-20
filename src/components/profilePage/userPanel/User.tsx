import React, {useEffect} from 'react';
import '../../../styles/style.css';
import {UserProfile} from "../../../models/backendRequests/UserProfile";
import UserRequests from "../../../requests/backendRequests/UserRequests";
import {EditPhotoButton} from "./EditPhotoButton";
import AlertStore from "../../../stores/AlertStore";
import BackendResponsesStore from "../../../stores/BackendResponsesStore";

function User(): JSX.Element {

    const prettyAlert = AlertStore(state => state.prettyAlert)

    const [userProfile, setProfile] = React.useState<UserProfile>();

    const updatedUserPhotoResponse = BackendResponsesStore(state => state.updatedUserPhotoResponse)
    const setUpdatedUserPhotoResponse = BackendResponsesStore(state => state.setUpdatedUserPhotoResponse)

    useEffect(() => {
        (async () => {
            const sessionToken = window.sessionStorage.getItem("sessionToken");
            if (sessionToken) {
                try {
                    setProfile(await UserRequests.getProfile(sessionToken))
                } catch (e: any) {
                    prettyAlert(e.response.data, false)
                }
            } else prettyAlert("No session token found.", false)
        })()
    }, []);

    useEffect(() => {
        if (updatedUserPhotoResponse) {
            (async () => {
                console.log(updatedUserPhotoResponse)
                const sessionToken = window.sessionStorage.getItem("sessionToken");
                if (sessionToken) {
                    setProfile(await UserRequests.getProfile(sessionToken))
                    setUpdatedUserPhotoResponse(null)
                } else prettyAlert("No session token found.", false)
            })()
        }
    }, [updatedUserPhotoResponse]);

    return (
        <div className="col-md-4 position-relative">
            <div className="align-items-stretch mb-4 " data-aos="zoom-in" data-aos-delay="100">
                <div className="icon-box icon-box-lightblue">
                    <h3 className="text-white"><strong>{userProfile?.name}</strong></h3>
                    <h4 className="text-white">{userProfile?.username}</h4>
                    <h6 className="text-white">({userProfile?.email})</h6>
                    <img src={userProfile?.profilePhotoUrl}
                         width="250"
                         alt=""
                         className="img-fluid rounded-circle img-centered"/>
                    <EditPhotoButton/>
                </div>
                <div className="options-top mr-5 mb-5">
                    <button className="btn text-white">
                        <i className='bx bx-edit-alt'></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default User