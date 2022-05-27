import React from 'react';
import '../../../styles/style.css';
import {Modal, ModalBody, ModalHeader, ModalTitle} from "react-bootstrap";
import AlertStore from "../../../stores/AlertStore";
import BackendResponsesStore from "../../../stores/BackendResponsesStore";
import EditUserInfoModalStore from "../../../stores/EditUserInfoModalStore";
import UserRequests from "../../../requests/backendRequests/UserRequests";

function EditUserInfoModal(): JSX.Element {

    const showingEditUserInfoModal = EditUserInfoModalStore(state => state.showingEditUserInfoModal)
    const setShowingEditUserInfoModal = EditUserInfoModalStore(state => state.setShowingEditUserInfoModal)
    const name = EditUserInfoModalStore(state => state.name)
    const setName = EditUserInfoModalStore(state => state.setName)
    const username = EditUserInfoModalStore(state => state.username)
    const setUsername = EditUserInfoModalStore(state => state.setUsername)
    const email = EditUserInfoModalStore(state => state.email)
    const setEmail = EditUserInfoModalStore(state => state.setEmail)

    const prettyAlert = AlertStore(state => state.prettyAlert)

    const setUpdatedUserInfoResponse = BackendResponsesStore(state => state.setUpdatedUserInfoResponse)

    async function submitForm() {
        const sessionToken = sessionStorage.getItem("sessionToken")
        if (sessionToken){
            try {
                let response = await UserRequests.updateUserInfo(name!, username!, email!, sessionToken)
                prettyAlert(response, true)
                setUpdatedUserInfoResponse(response)
            } catch (e: any) {
                prettyAlert(e.response.data || e.toJSON().message, false)
            }
            setShowingEditUserInfoModal(false)
        } else prettyAlert("You must be logged in to edit your user info", false)

    }

    let userInfoModal;
    if (showingEditUserInfoModal) {
        userInfoModal = <Modal
            show={showingEditUserInfoModal}
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
                                setShowingEditUserInfoModal(false)
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
                            <input type="text" className="form-control" placeholder="Name"
                                   value={name!}
                                   onChange={(e) => {
                                       setName(e.target.value)
                                   }}
                            />
                        </div>

                        {/*Username*/}
                        <div className="form-group mb-3">
                            <input type="text" className="form-control" placeholder="Username"
                                   value={username!}
                                   onChange={(e) => {
                                       setUsername(e.target.value)
                                   }}
                            />
                        </div>

                        {/*Email*/}
                        <div className="form-group mb-3">
                            <input type="text" className="form-control" placeholder="Email"
                                   value={email!}
                                   onChange={(e) => {
                                       setEmail(e.target.value)
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

export default EditUserInfoModal;

// TODO: Create function that receives a request function and alerts the user propertly