import axios from "axios";
import {UserProfile} from "../models/backendRequests/UserProfile";
import {PlaylistBasicDetails} from "../models/backendRequests/PlaylistBasicDetails";

class UserRequests {

    static async getPlaylist(playlistId: string) {
        const url = "/Playlist/Profile/" + playlistId;

        const options = {
            method: 'GET',
            url: url,
        };

        // @ts-ignore
        let profileResponse = await axios(options);
        let profile: UserProfile = profileResponse.data;
        return profile;

    }

}

export default UserRequests;