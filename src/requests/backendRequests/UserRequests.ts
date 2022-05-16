import axios from "axios";
import {UserProfile} from "../../models/backendRequests/UserProfile";
import {PlaylistBasicDetails} from "../../models/backendRequests/PlaylistRoute/PlaylistBasicDetails";

class UserRequests {

    static async getProfile(sessionToken: string) {
        const url = "/User/Profile/" + sessionToken;

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

    // Registers a new user
    static async register(username: string, name: string, email: string, password: string, userPhoto: File) {
        const url = "/User/register";

        const headers = {
            // 'Content-Type': 'multipart/form-data'
            // @ts-ignore
        }

        let formData = new FormData();
        formData.append("email", email);
        formData.append("password", password);
        formData.append("name", name);
        formData.append("username", username);
        formData.append("userPhoto", userPhoto);
        try {
            let response = await axios.post(url, formData, {headers})
            return response.data
        }
        catch (e) {
            alert(e);
        }

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
    static async editProfilePhoto(file: File, sessionToken: string) {

        const url = "/User/editProfilePhoto";

        const headers = {
            // 'Content-Type': 'multipart/form-data'
            // @ts-ignore
        }

        let formData = new FormData();
        formData.append("userPhoto", file);
        formData.append("sessionToken", file);
        let response = await axios.post(url, formData, {headers})
        return response.data

    }


}

export default UserRequests;