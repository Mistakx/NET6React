import create from 'zustand'
import {SearchedCommunityResultsState} from "../../models/states/searches/SearchedCommunityResultsState";
import {UserProfileResponseDto} from "../../models/backendResponses/userRoute/UserProfileResponseDto";
import {PlaylistDto} from "../../models/backendRequests/PlaylistRoute/PlaylistDto";

const SearchedCommunityResultsStore = create<SearchedCommunityResultsState>((set) => ({

    searchedCommunityResults: null,
    setSearchedCommunityResults: (searchedCommunityResults: UserProfileResponseDto[] | PlaylistDto[]) => set(state => ({
        searchedCommunityResults: searchedCommunityResults
    }))


}))

export default SearchedCommunityResultsStore;

