import React, {useRef} from "react";
import UserRequests from "../../../requests/backendRequests/UserRequests";
import {EditPhotoButtonProperties} from "../../../models/components/profilePage/EditPhotoButtonProperties";
import AlertStore from "../../../stores/AlertStore";

export function EditPhotoButton(props: EditPhotoButtonProperties) {

    const fileInputRef = useRef();

    const sessionToken = sessionStorage.getItem("sessionToken");

    const prettyAlert = AlertStore(state => state.prettyAlert)


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
                        try {
                            const response = await UserRequests.editProfilePhoto(file, sessionToken)
                            props.setUpdatedUserPhotoResponse(response)
                            prettyAlert(response, true)
                        } catch (e: any) {
                            prettyAlert(e.response.data, true)
                        }
                    } else prettyAlert("No file selected", false)
                }}
                multiple={false}
                type="file"
                hidden
            />

        </div>
    );
}