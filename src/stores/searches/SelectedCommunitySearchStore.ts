import create from 'zustand'
import {SelectedPlatformSearchState} from "../../models/states/searches/SelectedPlatformSearchState";
import {ApiSearch} from "../../requests/apiRequests/specificSearches/ApiSearch";
import {YouTubeSearchVideoByGeneral} from "../../requests/apiRequests/specificSearches/YouTubeSearchVideoByGeneral";
import {UserRequest} from "../../requests/backendRequests/communitySearchBar/UserRequest";
import {SelectedCommunitySearchState} from "../../models/states/searches/SelectedCommunitySearchState";
import {CommunitySearch} from "../../requests/backendRequests/communitySearchBar/CommunitySearch";
import {GeneralizedResult} from "../../models/apiResponses/GenericResults";
import {PlaylistDto} from "../../models/backendRequests/PlaylistRoute/PlaylistDto";
import {UserProfileDto} from "../../models/backendResponses/userRoute/UserProfileDto";

const SelectedCommunitySearchStore = create<SelectedCommunitySearchState>((set) => ({

    searchBarQuery: "",
    setSearchBarQuery: (searchBarQuery) => set(state => ({
        searchBarQuery: searchBarQuery
    })),

    selectedCommunitySearch: UserRequest.getInstance(),
    setSelectedCommunitySearch: (selectedCommunitySearch) => set(state => ({
        selectedCommunitySearch: selectedCommunitySearch
    })),

    showingRecommendations: false,
    setShowingRecommendations: (showingRecommendations) => set(state => ({
        showingRecommendations: showingRecommendations
    })),


    recommendations: [],
    setRecommendations: (recommendations) => set(state => ({
        recommendations: recommendations
    })),

    firstRecommendationsTitles: [],
    setFirstRecommendationsTitles: (firstRecommendationsTitles) => set(state => ({
        firstRecommendationsTitles: firstRecommendationsTitles
    })),


}))

export default SelectedCommunitySearchStore;

