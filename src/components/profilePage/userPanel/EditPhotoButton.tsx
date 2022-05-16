import React, {useRef} from "react";
import UserRequests from "../../../requests/backendRequests/UserRequests";
import {useNavigate} from "react-router-dom";
import {EditPhotoButtonProperties} from "../../../models/components/profilePage/EditPhotoButtonProperties";

export function EditPhotoButton(props: EditPhotoButtonProperties) {

    const fileInputRef = useRef();

    const navigate = useNavigate()

    return (
        <div>

            <button className="btn rounded position-absolute top-50 start-50 translate-middle mt-5"
                /*@ts-ignore*/
                    onClick={() => fileInputRef.current.click()}>
                <i className='bx bx-camera'></i>
            </button>

            <input
                // @ts-ignore
                ref={fileInputRef}
                // @ts-ignore
                onChange={async (e) => {
                    const file = e.target.files
                    if (file) {
                        props.setUpdatedUserPhotoUrl(await UserRequests.editProfilePhoto(file))
                    } else {
                        alert("No file selected")
                    }

                }}
                multiple={false}
                type="file"
                hidden
            />

        </div>
    );
}