import React, {useRef} from "react";
import UserRequests from "../../../requests/backendRequests/UserRequests";
import {EditPhotoButtonProperties} from "../../../models/components/profilePage/EditPhotoButtonProperties";

export function EditPhotoButton(props: EditPhotoButtonProperties) {

    const fileInputRef = useRef();

    const sessionToken = sessionStorage.getItem("sessionToken");

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
                    if (e.target.files && sessionToken) {
                        const file = e.target.files[0]
                        const response = await UserRequests.editProfilePhoto(file, sessionToken)
                        props.setUpdatedUserPhotoResponse(response)
                        alert(response)
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