import {SearchContent} from "spotify-types";

export interface SearchResultsProperties {
    hasSearched: boolean
    searchResults: SearchContent
    searchedPlatform: "YouTube" | "Spotify" | "TikTok"
}