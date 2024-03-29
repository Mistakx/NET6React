import create from 'zustand'
import {SearchedCommunityResultsState} from "../../models/states/searches/SearchedCommunityResultsState";
import {UserProfileDto} from "../../models/backendResponses/userRoute/UserProfileDto";
import {PlaylistDto} from "../../models/backendRequests/PlaylistRoute/PlaylistDto";
import {FollowedTopBarState} from "../../models/states/topBars/FollowedTopBarState";

const FollowedTopBarStore = create<FollowedTopBarState>((set) => ({

    showing: "Users",
    setShowing: (showing) => set(state => ({
        showing: showing
    })),

    userOrder: "Custom Order",
    setUserOrder: (userOrder) => set(state => ({
        userOrder: userOrder
    })),

    playlistOrder: "Custom Order",
    setPlaylistOrder: (playlistOrder) => set(state => ({
        playlistOrder: playlistOrder
    }))

}))

export default FollowedTopBarStore;

