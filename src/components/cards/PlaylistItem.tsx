import React, {useEffect} from 'react';
import '../../styles/style.css';
import {useNavigate} from "react-router-dom";
import PlaylistRequests from "../../requests/backendRequests/PlaylistRequests";
import EditOrCreatePlaylistModalStore from "../../stores/modals/EditOrCreatePlaylistModalStore";
import {EditPlaylist} from "../../models/backendRequests/PlaylistRoute/EditPlaylist";
import AlertStore from "../../stores/AlertStore";
import BackendResponsesStore from "../../stores/BackendResponsesStore";
import {useSortable} from "@dnd-kit/sortable";
import {CSS} from "@dnd-kit/utilities";
import {
    ProfilePlaylistItemProperties
} from "../../models/components/pages/communityPage/ProfilePlaylistItemProperties";
import RecommendationRequests from "../../requests/backendRequests/RecommendationRequests";
import CommunityRequests from "../../requests/backendRequests/CommunityRequests";
import PlaylistDropdownMenu from "../dropdownMenus/PlaylistDropdownMenu";
import SearchedCommunityResultsStore from "../../stores/searches/SearchedCommunityResultsStore";
import {UserProfileDto} from "../../models/backendResponses/userRoute/UserProfileDto";
import {PlaylistDto} from "../../models/backendRequests/PlaylistRoute/PlaylistDto";
import toggleFollowingPlaylistButton from "../../utils/following/toggleFollowingPlaylistButton";

function PlaylistItem(props: ProfilePlaylistItemProperties): JSX.Element {

    let navigate = useNavigate()

    const [followingButtonShapeClass, setFollowingButtonShapeClass] = React.useState<string>()

    const searchedCommunityResults = SearchedCommunityResultsStore(state => state.searchedCommunityResults)
    const setSearchedCommunityResults = SearchedCommunityResultsStore(state => state.setSearchedCommunityResults)

    const prettyAlert = AlertStore(state => state.prettyAlert)

    const setToggledFollowResponse = BackendResponsesStore(state => state.setToggledFollowResponse)

    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
    } = useSortable({id: props.basicDetails.id});


    useEffect(() => {
        if (props.basicDetails.followed) {
            setFollowingButtonShapeClass("bxs-heart")
        } else {
            setFollowingButtonShapeClass("bx-heart")
        }
    }, [])

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    let playlistItemDropdown;
    if (props.showingMyPlaylists) {
        playlistItemDropdown = <PlaylistDropdownMenu basicDetails={props.basicDetails}/>
    }

    let playlistDraggableIcon;
    if (props.draggable) {
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

    let ownerName;
    if (props.basicDetails.owner) {
        ownerName = <div className="card-text text-start">Owner: {props.basicDetails.owner.username}</div>
    }

    let weeklyViews;
    if (props.basicDetails.weeklyViewsAmount || props.basicDetails.weeklyViewsAmount === 0) {
        weeklyViews = <div className="card-text text-start">Weekly Views: {props.basicDetails.weeklyViewsAmount}</div>

    }
    let totalViews;
    if (props.basicDetails.totalViewsAmount || props.basicDetails.totalViewsAmount === 0) {
        totalViews = <div className="card-text text-start">Total Views: {props.basicDetails.totalViewsAmount}</div>
    }


    // The playlist item card grid depends varies if it is showing on a playlist or on a search result
    let playlistItemClass;
    if (!props.showingPlaylistInSearch) {
        playlistItemClass = "result col-lg-4 col-md-6 col-sm-6 col-6 position-relative"
    } else {
        playlistItemClass = "result col-lg-3 col-md-4 col-sm-6 col-6 position-relative"
    }

    let followButton;
    if (props.basicDetails.followed !== null) {
        followButton = <button className="btn btn-lg btn-add"
                               type="button"
                               onClick={async () => {
                                   try {
                                       const sessionToken = window.sessionStorage.getItem("sessionToken")
                                       if (sessionToken) {
                                           const response = await CommunityRequests.togglePlaylistFollow(props.basicDetails.id, sessionToken)
                                           prettyAlert(response, true)
                                           setToggledFollowResponse(response)
                                           toggleFollowingPlaylistButton(props.basicDetails, followingButtonShapeClass, setFollowingButtonShapeClass, searchedCommunityResults, setSearchedCommunityResults)
                                       } else prettyAlert("You need to be logged in to follow a playlist", false)
                                   } catch (e: any) {
                                       prettyAlert(e.response.data, false)
                                   }
                               }}
        >
            <i className={'bx ' + followingButtonShapeClass}></i>
        </button>

    }

    let ownerButton;
    if (props.basicDetails.owner) {
        ownerButton =
            <button className="btn btn-lg btn-user"
                    type="button" style={{
                backgroundSize: "100% 100%",
                backgroundImage: "url(" + props.basicDetails.owner.profilePhotoUrl + ")"
            }}
                    onClick={() => {
                        navigate(`/user/${props.basicDetails.owner?.username}`)
                    }}
            >
            </button>

    }

    return (

        <div className={playlistItemClass}
             data-aos="fade-up">

            <div ref={setNodeRef} style={style} {...attributes} {...listeners}>

                <div className="card scale clickable position-relative"
                     style={{
                         backgroundSize: "100% 100%",
                         backgroundImage: "url(" + props.basicDetails.thumbnailUrl + ")"
                     }}>

                    {playlistItemDropdown}
                    <div className="options options-bottom-right m-3">
                        {ownerButton}
                        {followButton}
                    </div>
                    <div className="card-img-overlay"
                         onClick={() => {
                             navigate("/playlist/" + props.basicDetails.id)
                             RecommendationRequests.savePlaylistView(props.basicDetails.id, window.sessionStorage.getItem("sessionToken")!)
                         }}
                    >
                        <h5 className="card-title text-uppercase text-center">{props.basicDetails.title}</h5>
                        {visibility}
                        {ownerName}
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

export default PlaylistItem;