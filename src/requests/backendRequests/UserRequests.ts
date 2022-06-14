import axios from "axios";
import {UserProfileResponseDto} from "../../models/backendResponses/userRoute/UserProfileResponseDto";
import {PlaylistBasicDetails} from "../../models/backendRequests/PlaylistRoute/PlaylistBasicDetails";
import {EditUserInfo} from "../../models/backendRequests/UserRoute/EditUserInfo";
import {EditUserPassword} from "../../models/backendRequests/UserRoute/EditUserPassword";
import {LoginResponseDto} from "../../models/backendResponses/userRoute/LoginResponseDto";
import {GetUserProfileDto} from "../../models/backendRequests/UserRoute/GetUserProfileDto";
import {GetUserPlaylistsDto} from "../../models/backendRequests/UserRoute/GetUserPlaylistsDto";

class UserRequests {

    static async getProfile(username: string, sessionToken: string) {
        const url = "/User/Profile/";

        const data: GetUserProfileDto = {
            username: username,
            sessionToken: sessionToken
        }

        const options = {
            method: 'POST',
            url: url,
            data: data
        };

        // @ts-ignore
        let profileResponse = await axios(options);
        let profile: UserProfileResponseDto = profileResponse.data;
        return profile;

    }

    static async getPlaylists(username: string, sessionToken: string) {
        const url = "/User/Playlists/";

        const data: GetUserPlaylistsDto = {
            username: username,
            sessionToken: sessionToken
        }

        const options = {
            method: 'POST',
            url: url,
            data: data
        };

        // @ts-ignore
        let profileResponse = await axios(options);
        return profileResponse.data as PlaylistBasicDetails[];

    }

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

        let response = await axios.post(url, formData, {headers})
        return response.data as string

    }

    // Logs in to the application and returns a session token
    static async login(email: string, password: string) {
        const url = "/User/login";

        const data = {
            email: email,
            password: password
        }

        const options = {
            method: 'POST',
            url: url,
            data: data,
        };


        // @ts-ignore
        let loginResponse = await axios(options)
        return loginResponse.data as LoginResponseDto

    }

    static async editProfilePhoto(file: File, sessionToken: string) {

        const url = "/User/editProfilePhoto";

        const headers = {
            // 'Content-Type': 'multipart/form-data'
            // @ts-ignore
        }

        let formData = new FormData();
        formData.append("userPhoto", file);
        formData.append("sessionToken", sessionToken);
        let response = await axios.post(url, formData, {headers})
        return response.data

    }

    static async updateUserInfo(name: string, username: string, email: string, sessionToken: string) {

        const url = "/User/editUserInfo";

        const data: EditUserInfo = {
            newName: name,
            newUsername: username,
            newEmail: email,
            sessionToken: sessionToken
        }

        const options = {
            method: 'POST',
            url: url,
            data: data
        };

        // @ts-ignore
        let response = await axios(options)
        return response.data as string
    }

    static async updatePassword(currentPassword: string, newPassword: string, sessionToken: string) {

        const url = "/User/editPassword";

        const data: EditUserPassword = {
            currentPassword: currentPassword,
            newPassword: newPassword,
            sessionToken: sessionToken
        }

        const options = {
            method: 'POST',
            url: url,
            data: data
        };

        // @ts-ignore
        let response = await axios(options)
        return response.data as string
    }

}

export default UserRequests;