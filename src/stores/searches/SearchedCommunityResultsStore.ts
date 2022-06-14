import create from 'zustand'
import {SearchedCommunityResultsState} from "../../models/states/searches/SearchedCommunityResultsState";
import {UserProfileResponseDto} from "../../models/backendResponses/userRoute/UserProfileResponseDto";
import {PlaylistBasicDetails} from "../../models/backendRequests/PlaylistRoute/PlaylistBasicDetails";

const SearchedCommunityResultsStore = create<SearchedCommunityResultsState>((set) => ({

    searchedCommunityResults: null,
    setSearchedCommunityResults: (searchedCommunityResults: UserProfileResponseDto[] | PlaylistBasicDetails[]) => set(state => ({
        searchedCommunityResults: searchedCommunityResults
    }))


}))

export default SearchedCommunityResultsStore;

