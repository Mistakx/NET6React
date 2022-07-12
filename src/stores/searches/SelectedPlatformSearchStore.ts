import create from 'zustand'
import {SelectedPlatformSearchState} from "../../models/states/searches/SelectedPlatformSearchState";
import {ApiSearch} from "../../requests/apiRequests/specificSearches/ApiSearch";
import {YouTubeSearchVideoByGeneral} from "../../requests/apiRequests/specificSearches/YouTubeSearchVideoByGeneral";
import React from "react";
import {GeneralizedResult} from "../../models/apiResponses/GenericResults";

const SelectedPlatformSearchStore = create<SelectedPlatformSearchState>((set) => ({

    searchBarQuery: "",
    setSearchBarQuery: (searchBarQuery) => set(state => ({
        searchBarQuery: searchBarQuery
    })),

    selectedSearch: YouTubeSearchVideoByGeneral.getInstance(),
    setSelectedSearch: (selectedSearch) => set(state => ({
        selectedSearch: selectedSearch
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

export default SelectedPlatformSearchStore;

