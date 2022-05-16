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

    // Logs in to the application, returns a session Id
    static async login(email: string, password: string) {
        const url = "/User/login";

        const data = {
            email: email,
            password: password
        }

        const options = {
            method: 'POST',
            url: url,
            data: data
        };



        // @ts-ignore
        let loginResponse = await axios(options);
        let sessionToken: string = loginResponse.data;
        return sessionToken;

    }

    // Logs in to the application, returns a session Id
    static async editProfilePhoto(file: FileList) {

        const url = "/User/editProfilePhoto";

        const headers = {
            // 'Content-Type': 'multipart/form-data'
            // @ts-ignore
        }


        let formData = new FormData();
        formData.append("file", file[0]);
        let response = await axios.post(url, formData, {headers})
        return response.data

    }


}

export default UserRequests;