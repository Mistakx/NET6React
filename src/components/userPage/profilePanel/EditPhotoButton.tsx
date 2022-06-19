import React, {useRef} from "react";
import UserRequests from "../../../requests/backendRequests/UserRequests";
import AlertStore from "../../../stores/AlertStore";
import BackendResponsesStore from "../../../stores/BackendResponsesStore";

export function EditPhotoButton() {

    const fileInputRef = useRef();

    const sessionToken = sessionStorage.getItem("sessionToken");

    const prettyAlert = AlertStore(state => state.prettyAlert)

    const setUpdatedUserPhotoResponse = BackendResponsesStore(state => state.setUpdatedUserPhotoResponse)

    return (
        <div>

            <button className="btn btn-rounded rounded position-absolute bottom-0 start-50 translate-middle mb-5"
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
                            setUpdatedUserPhotoResponse(response)
                            prettyAlert(response, true)
                        } catch (e: any) {
                            prettyAlert(e.response?.data || e.toJSON().message, false)
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