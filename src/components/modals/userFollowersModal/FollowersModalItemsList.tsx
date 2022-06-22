import '../../../styles/SearchPage.css';
import React, {useEffect} from "react";
import "aos/dist/aos.css";
import FollowersModalItem from "./FollowersModalItem";
import AlertStore from "../../../stores/AlertStore";
import BackendResponsesStore from "../../../stores/BackendResponsesStore";
import {UserProfileDto} from "../../../models/backendResponses/userRoute/UserProfileDto";
import CommunityRequests from "../../../requests/backendRequests/CommunityRequests";
import {
    FollowersModalItemsListProperties
} from "../../../models/components/pages/communityPage/FollowersModalItemsListProperties";
import {compareUsername} from "../../../utils/sorting/userSorting";


function FollowersModalItemsList(props: FollowersModalItemsListProperties): JSX.Element {

    const prettyAlert = AlertStore(state => state.prettyAlert)

    const removedFollowerResponse = BackendResponsesStore(state => state.removedFollowerResponse)
    const setRemovedFollowerResponse = BackendResponsesStore(state => state.setRemovedFollowerResponse)

    const [followers, setFollowers] = React.useState<UserProfileDto[]>();

    useEffect(() => {
        (async () => {
            const sessionToken = window.sessionStorage.getItem("sessionToken");
            if (sessionToken) {
                try {
                    if ("username" in props.showingFollowerOf) {
                        let response = await CommunityRequests.getUsersFollowingUser(props.showingFollowerOf.username)
                        response.sort(compareUsername)
                        setFollowers(response);
                    } else if ("title" in props.showingFollowerOf) {
                        let response = await CommunityRequests.getUsersFollowingPlaylist(props.showingFollowerOf.id)
                        response.sort(compareUsername)
                        setFollowers(response);
                    }
                } catch (e: any) {
                    prettyAlert(e.response?.data || e.toJSON().message, false)
                }
            } else prettyAlert("No session token found.", false)
        })()
    }, []);

    useEffect(() => {
        if (removedFollowerResponse) {
            (async () => {
                const sessionToken = window.sessionStorage.getItem("sessionToken");
                if (sessionToken) {
                    try {
                        if ("username" in props.showingFollowerOf) {
                            setFollowers(await CommunityRequests.getUsersFollowingUser(props.showingFollowerOf.username));
                        } else if ("title" in props.showingFollowerOf) {
                            setFollowers(await CommunityRequests.getUsersFollowingPlaylist(props.showingFollowerOf.id));
                        }
                    } catch (e: any) {
                        prettyAlert(e.response?.data || e.toJSON().message, false)
                    }
                    setRemovedFollowerResponse(null);
                } else prettyAlert("No session token found.", false)
            })()
        }
    }, [removedFollowerResponse]);

    let playlistItemsList: JSX.Element[] = [];
    if (followers?.length === 0) {
        playlistItemsList = [<div>No followers</div>]
    } else if (followers && followers?.length > 0) {
        for (const currentFollower of followers) {
            playlistItemsList.push(
                <FollowersModalItem key={currentFollower.username} follower={currentFollower} showingFollowerOf={props.showingFollowerOf}/>)
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

export default FollowersModalItemsList;
