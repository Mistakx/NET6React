import {PlaylistBasicDetails} from "../../../models/backendRequests/PlaylistRoute/PlaylistBasicDetails";
import {UserProfile} from "../../../models/backendRequests/UserRoute/UserProfile";
import {CommunitySearch} from "./CommunitySearch";
import {ApiSearch} from "../../apiRequests/specificSearches/ApiSearch";
import {Platform} from "../../apiRequests/platforms/Platform";
import Spotify from "../../apiRequests/platforms/Spotify";
import RecommendationRequests from "../RecommendationRequests";

export class PlaylistRequest extends CommunitySearch {

    private static searchCommunityPlaylistsInstance: CommunitySearch

    private constructor() {
        super();
    }

    static getInstance() {

        if (!PlaylistRequest.searchCommunityPlaylistsInstance) {
            PlaylistRequest.searchCommunityPlaylistsInstance = new PlaylistRequest();
        }
        return PlaylistRequest.searchCommunityPlaylistsInstance

    }

    public getButtonText() {
        return "Playlist";
    }

    public getSearchResults(searchQuery: string, sessionToken: string) {
        return RecommendationRequests.getTrendingPlaylists(searchQuery, sessionToken);
    }

}