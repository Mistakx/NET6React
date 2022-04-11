import {SearchContent} from "spotify-types";
import {Platform} from "../Platform";
import React from "react";

export interface SearchResultsProperties {
    searchedPlatform: Platform
    hasSearched: boolean
    searchResults: SearchContent
    setPlayingPlatform: React.Dispatch<React.SetStateAction<Platform | undefined>>
    setPlayingId: React.Dispatch<React.SetStateAction<string | undefined>>
}