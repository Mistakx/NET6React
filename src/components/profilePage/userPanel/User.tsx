import React, {useEffect} from 'react';
import '../../../styles/style.css';
import {UserProfile} from "../../../models/backendRequests/UserProfile";
import UserRequests from "../../../requests/backendRequests/UserRequests";
import {EditPhotoButton} from "./EditPhotoButton";
import {EditPhotoWithPreviewButton} from "./EditPhotoWithPreviewButton";

function User(): JSX.Element {

    const [userProfile, setProfile] = React.useState<UserProfile>();
    const [updatedUserPhotoUrl, setUpdatedUserPhotoUrl] = React.useState<string>();

    useEffect(() => {
        (async () => {
            setProfile(await UserRequests.getProfile(process.env.REACT_APP_USER_ID as string));
        })()
    }, [userProfile, updatedUserPhotoUrl]);

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
                    {/*<button className="btn rounded position-absolute top-50 start-50 translate-middle mt-5">*/}
                    {/*    <i className='bx bx-camera'></i>*/}
                    {/*</button>*/}
                    <EditPhotoButton setUpdatedUserPhotoUrl={setUpdatedUserPhotoUrl}/>
                    <EditPhotoWithPreviewButton/>
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