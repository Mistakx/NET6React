import React, {useEffect} from 'react';
import '../../../styles/style.css';
import {UserProfile} from "../../../models/backendRequests/UserProfile";
import UserRequests from "../../../requests/backendRequests/UserRequests";
import {EditPhotoButton} from "./EditPhotoButton";

function User(): JSX.Element {

    const [userProfile, setProfile] = React.useState<UserProfile>();
    const [updatedUserPhotoResponse, setUpdatedUserPhotoResponse] = React.useState<string | null>(null);

    useEffect(() => {
        (async () => {
            const sessionToken = window.sessionStorage.getItem("sessionToken");
            if (sessionToken) setProfile(await UserRequests.getProfile(sessionToken))
            else alert("No session token found.")
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
                } else alert("No session token found.")
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
                    <EditPhotoButton setUpdatedUserPhotoResponse={setUpdatedUserPhotoResponse}/>
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