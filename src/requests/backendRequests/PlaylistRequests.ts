import axios from "axios";
import {UserProfile} from "../../models/backendRequests/UserProfile";
import {PlaylistBasicDetails} from "../../models/backendRequests/PlaylistBasicDetails";
import {GenericResult} from "../../models/apiRequests/GenericResults";

class PlaylistRequests {

    static async getPlaylist(playlistId: string) {
        const url = "/Playlist/" + playlistId;

        const options = {
            method: 'GET',
            url: url,
        };

        // @ts-ignore
        let playlistResponse = await axios(options);
        let playlist: GenericResult[] = playlistResponse.data;
        return playlist;

    }

    static async addToPlaylist(playlistId: string) {
        const url = "/Playlist/";

        const options = {
            method: 'GET',
            url: url,
        };

        // @ts-ignore
        let playlistResponse = await axios(options);
        let playlist: GenericResult[] = playlistResponse.data;
        return playlist;

    }

}

export default PlaylistRequests;