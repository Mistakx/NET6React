import create from 'zustand'
import {SearchedCommunityResultsState} from "../../models/states/searches/SearchedCommunityResultsState";
import {UserProfileDto} from "../../models/backendResponses/userRoute/UserProfileDto";
import {PlaylistDto} from "../../models/backendRequests/PlaylistRoute/PlaylistDto";
import {FollowedTopBarState} from "../../models/states/topBars/FollowedTopBarState";
import {PlaylistTopBarState} from "../../models/states/topBars/PlaylistTopBarState";

const PlaylistTopBarStore = create<PlaylistTopBarState>((set) => ({

    order: "Custom Order",
    setOrder: (order) => set(state => ({
        order: order
    }))

}))

export default PlaylistTopBarStore;

