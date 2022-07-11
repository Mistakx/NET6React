import create from 'zustand'
import {SelectedPlatformSearchState} from "../../models/states/searches/SelectedPlatformSearchState";
import {ApiSearch} from "../../requests/apiRequests/specificSearches/ApiSearch";
import {YouTubeSearchVideoByGeneral} from "../../requests/apiRequests/specificSearches/YouTubeSearchVideoByGeneral";
import React from "react";
import {GeneralizedResult} from "../../models/apiResponses/GenericResults";

const SelectedPlatformSearchStore = create<SelectedPlatformSearchState>((set) => ({

    searchBarQuery: "",
    setSearchBarQuery: (searchBarQuery: string) => set(state => ({
        searchBarQuery: searchBarQuery
    })),

    selectedSearch: YouTubeSearchVideoByGeneral.getInstance(),
    setSelectedSearch: (selectedSearch: ApiSearch) => set(state => ({
        selectedSearch: selectedSearch
    })),


    recommendations: [],
    setRecommendations: (recommendations: GeneralizedResult[]) => set(state => ({
        recommendations: recommendations
    })),

    firstRecommendationsTitles: [],
    setFirstRecommendationsTitles: (firstRecommendationsTitles: string[]) => set(state => ({
        firstRecommendationsTitles: firstRecommendationsTitles
    })),


}))

export default SelectedPlatformSearchStore;

