import React, {useEffect, useState} from 'react';
import UserPlaylistsModal from "../searchPage/userPlaylistsModal/UserPlaylistsModal";
import {PlaylistDto} from "../../models/backendRequests/PlaylistRoute/PlaylistDto";
import FollowedTopBarStore from "../../stores/topBars/FollowedTopBarStore";
import CommunityRequests from "../../requests/backendRequests/CommunityRequests";
import CommunityResultComponentFactory from "../communityPage/searchItems/CommunityResultComponentFactory";
import {UserProfileDto} from "../../models/backendResponses/userRoute/UserProfileDto";

function FollowedList(): JSX.Element {

    const showing = FollowedTopBarStore(state => state.showing)

    const [followedList, setFollowedList] = useState<JSX.Element[]>();

    const [followedResults, setFollowedResults] = useState<UserProfileDto[] | PlaylistDto[]>([]);

    useEffect(() => {
        (async () => {
            if (showing == "Playlists") setFollowedResults(await CommunityRequests.getFollowedPlaylists(window.sessionStorage.getItem("sessionToken")!));
            else if (showing == "Users") setFollowedResults(await CommunityRequests.getFollowedUsers(window.sessionStorage.getItem("sessionToken")!));
        })()
    }, [showing]);

    useEffect(() => {

        if (followedResults) {

            // No results
            if (followedResults.length === 0) {
                setFollowedList([<p>No results.</p>]);
            }

            // Valid results
            else if (followedResults.length > 0) {
                setFollowedList(CommunityResultComponentFactory.create(followedResults));
            }
        }


    }, [followedResults]);

    return (

        <div>

            <UserPlaylistsModal/>

            <div className="results">
                <div className="row">

                    {followedList}

                </div>
            </div>
        </div>

    )

}

export default FollowedList;
