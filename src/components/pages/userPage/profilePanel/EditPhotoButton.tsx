import React, {useRef} from "react";
import UserRequests from "../../../../requests/backendRequests/UserRequests";
import AlertStore from "../../../../stores/AlertStore";
import BackendResponsesStore from "../../../../stores/BackendResponsesStore";

export function EditPhotoButton() {

    const fileInputRef = useRef();

    const sessionToken = sessionStorage.getItem("sessionToken");

    const prettyAlert = AlertStore(state => state.prettyAlert)

    const setUpdatedUserPhotoResponse = BackendResponsesStore(state => state.setUpdatedUserPhotoResponse)

    return (
        <div className="edit-profile-photo position-absolute top-50 start-50 translate-middle">
            <button className="btn btn-light"
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
                            prettyAlert(e.response.data, false)
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