import axios from "axios";
import {UserProfile} from "../../models/backendRequests/UserProfile";
import {PlaylistBasicDetails} from "../../models/backendRequests/PlaylistBasicDetails";

class UserRequests {

    static async getProfile(userId: string) {
        const url = "/User/Profile/" + userId;

        const options = {
            method: 'GET',
            url: url,
        };

        // @ts-ignore
        let profileResponse = await axios(options);
        let profile: UserProfile = profileResponse.data;
        return profile;

    }

    static async getPlaylists(userId: string) {
        const url = "/User/Playlists/" + userId;

        const options = {
            method: 'GET',
            url: url,
        };

        // @ts-ignore
        let profileResponse = await axios(options);
        let profile: PlaylistBasicDetails[] = profileResponse.data;
        return profile;

    }

}

export default UserRequests;