import React from 'react';
import '../../../styles/style.css';
import {useNavigate} from "react-router-dom";
import PlaylistRequests from "../../../requests/backendRequests/PlaylistRequests";
import EditOrCreatePlaylistModalStore from "../../../stores/modals/EditOrCreatePlaylistModalStore";
import {EditPlaylist} from "../../../models/backendRequests/PlaylistRoute/EditPlaylist";
import AlertStore from "../../../stores/AlertStore";
import BackendResponsesStore from "../../../stores/BackendResponsesStore";
import {useSortable} from "@dnd-kit/sortable";
import {CSS} from "@dnd-kit/utilities";
import {ProfilePlaylistItemProperties} from "../../../models/components/communityPage/ProfilePlaylistItemProperties";
import RecommendationRequests from "../../../requests/backendRequests/RecommendationRequests";

function UserPlaylistItem(props: ProfilePlaylistItemProperties): JSX.Element {

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
    } = useSortable({id: props.basicDetails.id});

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    let playlistItemDropdown;
    if (props.showingMyPlaylists) {
        playlistItemDropdown = <div className="options-dropdown">
            <div className="btn-group">

                <button type="button" className="btn dropdown-toggle-split"
                        data-bs-toggle="dropdown" aria-expanded="false">
                    <i className='bx bx-dots-horizontal-rounded'></i>
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
                                    visibility: props.basicDetails.visibility!,
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
                                    prettyAlert(e.response?.data || e.toJSON().message, true)
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
    }

    let playlistDraggableIcon;
    if (props.showingMyPlaylists) {
        playlistDraggableIcon = <div className="options-dropdown position-absolute" style={{top: 0, right: 0}}>
            <div className="btn-group" style={{position: "absolute", top: "10px", right: "10px"}}>

                <button type="button" className="btn dropdown-toggle-split">
                    <i className='bx bx-menu'></i>
                </button>

            </div>
        </div>
    }

    // The backend only sends the needed information to render a playlist item.

    let visibility;
    if (props.basicDetails.visibility) {
        visibility = <div className="card-text text-start">{props.basicDetails.visibility}</div>
    }

    let weeklyViews;
    if (props.basicDetails.weeklyViewsAmount || props.basicDetails.weeklyViewsAmount === 0) {
        weeklyViews = <div className="card-text text-start">Weekly Views: {props.basicDetails.weeklyViewsAmount}</div>

    }
    let totalViews;
    if (props.basicDetails.totalViewsAmount || props.basicDetails.totalViewsAmount === 0) {
        totalViews = <div className="card-text text-start">Total Views: {props.basicDetails.totalViewsAmount}</div>
    }

    let playlistItemClass;
    if (!props.showingPlaylistInSearch) {
        console.log(props.showingPlaylistInSearch)
        playlistItemClass = "col-lg-4 col-md-6 col-sm-6 col-6 position-relative"
    } else {
        playlistItemClass = "result col-lg-3 col-md-4 col-sm-6 col-6 position-relative"
    }


    return (

        <div className={playlistItemClass}
             data-aos="fade-up">

            <div ref={setNodeRef} style={style} {...attributes} {...listeners}>

                <div className="card scale clickable"
                     style={{
                         backgroundSize: "100% 100%",
                         backgroundImage: "url(" + props.basicDetails.thumbnailUrl + ")"
                     }}>

                    {playlistItemDropdown}

                    <div className="card-img-overlay text-end"
                         onClick={() => {
                             navigate("/playlist/" + props.basicDetails.id)
                             RecommendationRequests.savePlaylistView(props.basicDetails.id, window.sessionStorage.getItem("sessionToken")!)
                         }}
                    >
                        <h5 className="card-title text-uppercase text-center">{props.basicDetails.title}</h5>
                        {visibility}
                        <div className="card-text text-start">Items: {props.basicDetails.resultsAmount}</div>
                        {weeklyViews}
                        {totalViews}
                        <div className="card-text text-start"
                             style={{"fontStyle": "italic"}}>{props.basicDetails.description}</div>
                    </div>
                    {playlistDraggableIcon}
                </div>

            </div>

        </div>
    )
}

export default UserPlaylistItem;