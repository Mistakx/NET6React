import React from 'react';
import '../../../styles/style.css';
import {useNavigate} from "react-router-dom";
import PlaylistRequests from "../../../requests/backendRequests/PlaylistRequests";
import EditOrCreatePlaylistModalStore from "../../../stores/EditOrCreatePlaylistModalStore";
import {EditPlaylist} from "../../../models/backendRequests/PlaylistRoute/EditPlaylist";
import AlertStore from "../../../stores/AlertStore";
import BackendResponsesStore from "../../../stores/BackendResponsesStore";
import {useSortable} from "@dnd-kit/sortable";
import {CSS} from "@dnd-kit/utilities";
import {ProfilePlaylistItemProperties} from "../../../models/components/profilePage/ProfilePlaylistItemProperties";

function ProfilePlaylistItem(props: ProfilePlaylistItemProperties): JSX.Element {

    let navigate = useNavigate()

    const prettyAlert = AlertStore(state => state.prettyAlert)

    const setPlaylistToEditOrCreate = EditOrCreatePlaylistModalStore(state => state.setPlaylistToEditOrCreate)
    const setShowingEditOrCreatePlaylistModal = EditOrCreatePlaylistModalStore(state => state.setShowingEditOrCreatePlaylistModal)

    const setDeletePlaylistResponse = BackendResponsesStore(state => state.setDeletePlaylistResponse)
    const setResetCoverResponse = BackendResponsesStore(state => state.setResetCoverResponse)

    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging
    } = useSortable({id: props.basicDetails.id});

    const style = {
        // width: "100%",
        // height: "100%",
        // padding: 20,
        // border: '1px solid',
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (

        <div className="col-md-6 col-sm-6 col-lg-4 col-6 position-relative scale "
             data-aos="fade-down"
        >

            <div ref={setNodeRef} style={style} {...attributes} {...listeners}>

                <div className="clickable card"
                     style={{
                         backgroundSize: "100% 100%",
                         backgroundImage: "url(" + props.basicDetails.thumbnailUrl + ")"
                     }}>
                    <div className="card-img-overlay text-end"
                         onClick={() => {
                             navigate("/playlist/" + props.basicDetails.id)
                         }}
                    >
                        <h5 className="card-title text-uppercase">{props.basicDetails.title}</h5>
                        <p className="card-text">{props.basicDetails.visibility}</p>
                        <p className="card-text">{props.basicDetails.description}</p>
                    </div>

                    <div className="options-dropdown">
                        <div className="btn-group">
                            <button type="button" className="btn dropdown-toggle-split"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                <i className='bx bx-dots-horizontal-rounded'></i>
                                <span className="visually-hidden">Toggle Dropdown</span>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-dark">
                                <li
                                    onClick={() => {
                                        const sessionToken = sessionStorage.getItem("sessionToken")
                                        if (sessionToken) {
                                            setShowingEditOrCreatePlaylistModal(true)
                                            let playlistToEdit: EditPlaylist = {
                                                playlistId: props.basicDetails.id,
                                                title: props.basicDetails.title,
                                                description: props.basicDetails.description,
                                                visibility: props.basicDetails.visibility,
                                                sessionToken: sessionToken
                                            }
                                            setPlaylistToEditOrCreate(playlistToEdit)
                                        } else prettyAlert("You must be logged in to edit a playlist.", false)

                                    }}>
                                    <div className="dropdown-item">Edit</div>
                                </li>
                                <li
                                    onClick={async () => {
                                        const sessionToken = sessionStorage.getItem("sessionToken")
                                        if (sessionToken) {
                                            try {
                                                let response = await PlaylistRequests.setCoverItem(props.basicDetails.id, "", sessionToken)
                                                prettyAlert(response, true)
                                                setResetCoverResponse(response)
                                            } catch (e: any) {
                                                prettyAlert(e.response?.data || e.toJSON().message, false)
                                            }
                                        } else prettyAlert("You must be logged in to edit a playlist.", false)
                                    }}>
                                    <div className="dropdown-item">Reset cover</div>
                                </li>
                                <li
                                    onClick={async () => {
                                        const sessionToken = sessionStorage.getItem("sessionToken")
                                        if (sessionToken) {
                                            try {
                                                let response = await PlaylistRequests.deletePlaylist(props.basicDetails.id, sessionToken)
                                                prettyAlert(response, true)
                                                setDeletePlaylistResponse(response)
                                            } catch (e: any) {
                                                prettyAlert(e.response?.data || e.toJSON().message, false)
                                            }
                                        } else prettyAlert("You must be logged in to delete a playlist.", false)
                                    }}
                                >
                                    <div className="dropdown-item text-danger">Delete</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProfilePlaylistItem;