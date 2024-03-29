import create from 'zustand'
import {SearchedCommunityResultsState} from "../../models/states/searches/SearchedCommunityResultsState";
import {UserProfileDto} from "../../models/backendResponses/userRoute/UserProfileDto";
import {PlaylistDto} from "../../models/backendRequests/PlaylistRoute/PlaylistDto";
import {FollowedTopBarState} from "../../models/states/topBars/FollowedTopBarState";
import {UserTopBarState} from "../../models/states/topBars/UserTopBarState";

const UserTopBarStore = create<UserTopBarState>((set) => ({

    order: "Custom Order",
    setOrder: (order) => set(state => ({
        order: order
    }))

}))

export default UserTopBarStore;

