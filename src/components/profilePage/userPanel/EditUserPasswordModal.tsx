import React, {useState} from 'react';
import '../../../styles/style.css';
import {Modal, ModalBody, ModalHeader, ModalTitle} from "react-bootstrap";
import AlertStore from "../../../stores/AlertStore";
import UserRequests from "../../../requests/backendRequests/UserRequests";
import EditUserPasswordModalStore from "../../../stores/EditUserPasswordModal";

function EditUserPasswordModal(): JSX.Element {

    const showingEditUserPasswordModal = EditUserPasswordModalStore(state => state.showingEditUserPasswordModal)
    const setShowingEditUserPasswordModal = EditUserPasswordModalStore(state => state.setShowingEditUserPasswordModal)

    const [newPassword, setNewPassword] = useState("")
    const [currentPassword, setCurrentPassword] = useState("")

    const prettyAlert = AlertStore(state => state.prettyAlert)

    async function submitForm() {
        const sessionToken = sessionStorage.getItem("sessionToken")
        if (sessionToken){
            try {
                let response = await UserRequests.updatePassword(currentPassword, newPassword, sessionToken)
                prettyAlert(response, true)
                setShowingEditUserPasswordModal(false)
            } catch (e: any) {
                prettyAlert(e.response.data || e.toJSON().message, false)
            }
        } else prettyAlert("You must be logged in to edit your user password", false)

    }

    let userInfoModal;
    if (showingEditUserPasswordModal) {
        userInfoModal = <Modal
            show={showingEditUserPasswordModal}
            backdrop="static"
            keyboard={true}
            centered={true}
        >

            <div className="modal-content">

                <ModalHeader>

                    <ModalTitle>
                        <h5 id="exampleModalLabel">Edit user info</h5>

                    </ModalTitle>

                    <button className="btn-close"
                            onClick={() => {
                                setShowingEditUserPasswordModal(false)
                            }}>
                    </button>

                </ModalHeader>

                <ModalBody>
                    <form onSubmit={async (e) => {
                        e.preventDefault()
                        await submitForm()
                    }}>

                        {/*Name*/}
                        <div className="form-group mb-3">
                            <input type="text" className="form-control" placeholder="Current password"
                                   value={currentPassword}
                                   onChange={(e) => {
                                       setCurrentPassword(e.target.value)
                                   }}
                            />
                        </div>

                        {/*Username*/}
                        <div className="form-group mb-3">
                            <input type="text" className="form-control" placeholder="New password"
                                   value={newPassword}
                                   onChange={(e) => {
                                       setNewPassword(e.target.value)
                                   }}
                            />
                        </div>

                    </form>
                </ModalBody>

                <div className="modal-footer">
                    <button type="submit" className="btn btn-success"
                            onClick={async (e) => {
                                e.preventDefault()
                                await submitForm()
                            }}
                    >
                        Save changes
                    </button>
                </div>
            </div>

        </Modal>
    }

    return (
        <div>
            {userInfoModal}
        </div>
    )

}

export default EditUserPasswordModal;