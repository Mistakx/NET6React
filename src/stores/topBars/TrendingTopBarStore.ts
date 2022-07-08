import create from 'zustand'
import {SearchedCommunityResultsState} from "../../models/states/searches/SearchedCommunityResultsState";
import {UserProfileDto} from "../../models/backendResponses/userRoute/UserProfileDto";
import {PlaylistDto} from "../../models/backendRequests/PlaylistRoute/PlaylistDto";
import {FollowedTopBarState} from "../../models/states/topBars/FollowedTopBarState";
import {UserTopBarState} from "../../models/states/topBars/UserTopBarState";
import {TrendingTopBarState} from "../../models/states/topBars/TrendingTopBarState";

const TrendingTopBarStore = create<TrendingTopBarState>((set) => ({

    showing: "Weekly",
    setShowing: (showing) => set(state => ({
        showing: showing
    }))

}))

export default TrendingTopBarStore;

