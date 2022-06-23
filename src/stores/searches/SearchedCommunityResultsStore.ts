import create from 'zustand'
import {SearchedCommunityResultsState} from "../../models/states/searches/SearchedCommunityResultsState";
import {UserProfileDto} from "../../models/backendResponses/userRoute/UserProfileDto";
import {PlaylistDto} from "../../models/backendRequests/PlaylistRoute/PlaylistDto";

const SearchedCommunityResultsStore = create<SearchedCommunityResultsState>((set) => ({

    searchedCommunityResults: null,
    setSearchedCommunityResults: (searchedCommunityResults: UserProfileDto[] | PlaylistDto[]) => set(state => ({
        searchedCommunityResults: searchedCommunityResults
    }))

}))

export default SearchedCommunityResultsStore;

