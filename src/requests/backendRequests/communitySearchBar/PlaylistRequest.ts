import {CommunitySearch} from "./CommunitySearch";
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

    public getSearchResults(searchQuery: string, page: number, limit: number, sessionToken: string) {
        return RecommendationRequests.getTrendingPlaylists(searchQuery, page, limit, sessionToken);
    }

}