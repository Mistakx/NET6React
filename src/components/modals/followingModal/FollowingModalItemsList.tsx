import '../../../styles/SearchPage.css';
import React, {useEffect} from "react";
import "aos/dist/aos.css";
import FollowingModalItem from "./FollowingModalItem";
import AlertStore from "../../../stores/AlertStore";
import BackendResponsesStore from "../../../stores/BackendResponsesStore";
import {UserProfileDto} from "../../../models/backendResponses/userRoute/UserProfileDto";
import CommunityRequests from "../../../requests/backendRequests/CommunityRequests";
import {
    FollowersModalItemsListProperties
} from "../../../models/components/modals/followersModal/FollowersModalItemsListProperties";
import {compareUsername} from "../../../utils/sorting/userSorting";
import {
    FollowingModalItemsListProperties
} from "../../../models/components/modals/followingModal/FollowingModalItemsListProperties";
import {PlaylistDto} from "../../../models/backendRequests/PlaylistRoute/PlaylistDto";
import {comparePlaylistTitle} from "../../../utils/sorting/playlistSorting";
import UserProfile from "../../pages/userPage/profilePanel/UserProfile";


function FollowingModalItemsList(props: FollowingModalItemsListProperties): JSX.Element {


    const prettyAlert = AlertStore(state => state.prettyAlert)

    const toggledFollowResponse = BackendResponsesStore(state => state.toggledFollowResponse)
    const setToggledFollowResponse = BackendResponsesStore(state => state.setToggledFollowResponse)

    const [following, setFollowing] = React.useState<UserProfileDto[] | PlaylistDto[]>();

    useEffect(() => {
        (async () => {
            const sessionToken = localStorage.getItem("sessionToken");
            if (sessionToken) {
                try {
                    if (props.showing === "Users") {
                        let response = await CommunityRequests.getUsersUserFollows(props.showingFollowingOf.username, sessionToken)
                        response.sort(compareUsername)
                        setFollowing(response);
                    } else if (props.showing === "Playlists") {
                        let response = await CommunityRequests.getPlaylistsUserFollowsDto(props.showingFollowingOf.username, sessionToken)
                        response.sort(comparePlaylistTitle)
                        setFollowing(response);
                    }
                } catch (e: any) {
                    prettyAlert(e.response.data, false)
                }
            } else prettyAlert("No session token found.", false)
        })()
    }, []);

    useEffect(() => {
        (async () => {
            const sessionToken = localStorage.getItem("sessionToken");
            if (sessionToken) {
                try {
                    if (props.showing === "Users") {
                        let response = await CommunityRequests.getUsersUserFollows(props.showingFollowingOf.username, sessionToken)
                        response.sort(compareUsername)
                        setFollowing(response);
                    } else if (props.showing === "Playlists") {
                        let response = await CommunityRequests.getPlaylistsUserFollowsDto(props.showingFollowingOf.username, sessionToken)
                        response.sort(comparePlaylistTitle)
                        setFollowing(response);
                    }
                } catch (e: any) {
                    prettyAlert(e.response.data, false)
                }
            } else prettyAlert("No session token found.", false)
        })()
    }, [props.showing]);

    useEffect(() => {
        if (toggledFollowResponse) {
            (async () => {
                const sessionToken = localStorage.getItem("sessionToken");
                if (sessionToken) {
                    try {
                        if (props.showing === "Users") {
                            let response = await CommunityRequests.getUsersUserFollows(props.showingFollowingOf.username, sessionToken)
                            response.sort(compareUsername)
                            setFollowing(response);
                        } else if (props.showing === "Playlists") {
                            let response = await CommunityRequests.getPlaylistsUserFollowsDto(props.showingFollowingOf.username, sessionToken)
                            response.sort(comparePlaylistTitle)
                            setFollowing(response);
                        }
                    } catch (e: any) {
                        prettyAlert(e.response.data, false)
                    }
                    setToggledFollowResponse(null);
                } else prettyAlert("No session token found.", false)
            })()
        }
    }, [toggledFollowResponse]);

    let playlistItemsList: JSX.Element[] = [];
    if (following?.length === 0) {
        playlistItemsList = [<div key={"Placeholder"}>No results</div>]
    } else if (following && following?.length > 0) {
        for (const currentFollowingItem of following) {
            playlistItemsList.push(
                <FollowingModalItem
                    key={(currentFollowingItem as UserProfileDto).username || (currentFollowingItem as PlaylistDto).id}
                    following={currentFollowingItem}
                    showingFollowingOf={props.showingFollowingOf}
                />
            )
        }
    }


    return (
        <div>

            <ul className="list-group">
                {playlistItemsList}
            </ul>
        </div>
    )
}

export default FollowingModalItemsList;
