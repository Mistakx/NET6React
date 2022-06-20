import React from 'react';
import '../../../styles/style.css';
import {Modal, ModalBody, ModalHeader, ModalTitle} from "react-bootstrap";
import AlertStore from "../../../stores/AlertStore";
import BackendResponsesStore from "../../../stores/BackendResponsesStore";
import EditUserInfoModalStore from "../../../stores/modals/EditUserInfoModalStore";
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
                setShowingEditUserInfoModal(false)
            } catch (e: any) {
                prettyAlert(e.response?.data || e.toJSON().message, false)
            }
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
                        <h5 id="exampleModalLabel">Edit My Information</h5>

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
            {/* {userInfoModal} */}

            <div className="offcanvas offcanvas-end" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                    <h5 id="offcanvasRightLabel">Edit My Information</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body position-relative">
                    
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

                        <div className="divisor"></div>

                        {/*Name*/}
                        <div className="form-group mb-3">
                            <input type="password" className="form-control" placeholder="Current password"
                                // value={currentPassword}
                                // onChange={(e) => {
                                //     setCurrentPassword(e.target.value)
                                // }}
                            />
                        </div>

                        {/*Username*/}
                        <div className="form-group mb-3">
                            <input type="password" className="form-control" placeholder="New password"
                                // value={newPassword}
                                // onChange={(e) => {
                                //     setNewPassword(e.target.value)
                                // }}
                            />
                        </div>


                    </form>




                    <button type="submit" className="btn btn-success position-absolute bottom-0 end-0 mb-4 me-2"
                        onClick={async (e) => {
                            e.preventDefault()
                            await submitForm()
                        }}
                    >
                        Save changes
                    </button>

                </div>
            </div>
        </div>
    )

}

export default EditUserInfoModal;