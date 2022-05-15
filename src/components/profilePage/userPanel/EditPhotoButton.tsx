import React, {useRef} from "react";
import UserRequests from "../../../requests/backendRequests/UserRequests";

export function EditPhotoButton() {

    const fileInputRef = useRef();

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
                onChange={(e) => {
                    const file = e.target.files
                    if (file) {
                        UserRequests.editProfilePhoto(file)
                    }

                }}
                multiple={false}
                type="file"
                hidden
            />

        </div>
    );
}