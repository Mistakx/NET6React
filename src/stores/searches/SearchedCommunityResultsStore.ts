import create from 'zustand'
import {SearchedCommunityResultsState} from "../../models/states/searches/SearchedCommunityResultsState";
import {UserProfile} from "../../models/backendRequests/UserRoute/UserProfile";
import {PlaylistBasicDetails} from "../../models/backendRequests/PlaylistRoute/PlaylistBasicDetails";

const SearchedCommunityResultsStore = create<SearchedCommunityResultsState>((set) => ({

    searchedCommunityResults: null,
    setSearchedCommunityResults: (searchedCommunityResults: UserProfile[] | PlaylistBasicDetails[]) => set(state => ({
        searchedCommunityResults: searchedCommunityResults
    }))


}))

export default SearchedCommunityResultsStore;

