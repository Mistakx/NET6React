import '../../../styles/SearchPage.css';
import React from "react";
import "aos/dist/aos.css";
import {PlaylistItemProperties} from "../../../models/components/modals/userPlaylistsModal/PlaylistItemProperties";
import PlaylistRequests from "../../../requests/backendRequests/PlaylistRequests";
import UserPlaylistsModalStore from "../../../stores/modals/UserPlaylistsModalStore";
import AlertStore from "../../../stores/AlertStore";
import {useNavigate} from "react-router-dom";
import {
    FollowersModalItemProperties
} from "../../../models/components/modals/followersModal/FollowersModalItemProperties";
import CommunityRequests from "../../../requests/backendRequests/CommunityRequests";
import BackendResponsesStore from "../../../stores/BackendResponsesStore";
import UserRequests from "../../../requests/backendRequests/UserRequests";

function FollowersModalItem(props: FollowersModalItemProperties): JSX.Element {

    const prettyAlert = AlertStore(state => state.prettyAlert)

    const setRemovedFollowerResponse = BackendResponsesStore(state => state.setRemovedFollowerResponse)

    const navigate = useNavigate()

    // Remove follower button appears if showing follower of a user who is me, or a playlist that belongs to me (doesn't have an owner)
    let removeFollowerButton;
    if (props.showingFollowerOf && "username" in props.showingFollowerOf && props.showingFollowerOf.username === window.sessionStorage.getItem("username")
        || props.showingFollowerOf && "title" in props.showingFollowerOf && props.showingFollowerOf.owner === null) {
        removeFollowerButton = <button
            style={{
                height: 100,
                width: 100,
                backgroundColor: "red",
            }}
            onClick={async () => {

                const sessionToken = window.sessionStorage.getItem("sessionToken");
                if (props.showingFollowerOf && sessionToken) {
                    try {
                        let response: string;

                        if ("username" in props.showingFollowerOf) {
                            response = await CommunityRequests.removeFollowFromUser(props.follower.username, sessionToken)

                        } else if ("title" in props.showingFollowerOf) {
                            response = await CommunityRequests.removeFollowFromPlaylist(props.showingFollowerOf.id, props.follower.username, sessionToken)
                        }
                        setRemovedFollowerResponse(response!)
                        prettyAlert(response!, true)

                    } catch (e: any) {
                        prettyAlert(e.response?.data || e.toJSON().message, false)
                    }
                } else prettyAlert("No session token found.", false)

            }}

        >Remove Follower</button>
    }

    return (

        <li className="list-group-item d-flex justify-content-between align-items-start clickable"
            onClick={() => {
                navigate(`/user/${props.follower.username}`)
            }}>

            {removeFollowerButton}

            <button style={{
                height: 100,
                width: 100,
                backgroundSize: "100% 100%",
                backgroundImage: "url(/" + props.follower.profilePhotoUrl + ")"
            }}></button>

            {props.follower.username}

        </li>

    )
}

export default FollowersModalItem;
