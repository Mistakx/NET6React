import axios from "axios";
import {UserProfileDto} from "../../models/backendResponses/userRoute/UserProfileDto";
import {PlaylistDto} from "../../models/backendRequests/PlaylistRoute/PlaylistDto";
import {EditUserInfo} from "../../models/backendRequests/UserRoute/EditUserInfo";
import {EditUserPassword} from "../../models/backendRequests/UserRoute/EditUserPassword";
import {LoginResponseDto} from "../../models/backendResponses/userRoute/LoginResponseDto";
import {GetUserProfileDto} from "../../models/backendRequests/UserRoute/GetUserProfileDto";
import {GetUserPlaylistsDto} from "../../models/backendRequests/UserRoute/GetUserPlaylistsDto";
import {SortPlaylist} from "../../models/backendRequests/PlaylistRoute/SortPlaylist";
import {ToggleUserFollowDto} from "../../models/backendRequests/CommunityRoute/ToggleUserFollowDto";
import {TogglePlaylistFollowDto} from "../../models/backendRequests/CommunityRoute/TogglePlaylistFollowDto";
import {GetFollowedPlaylistsDto} from "../../models/backendRequests/CommunityRoute/GetFollowedPlaylistsDto";
import {GetFollowedUsersDto} from "../../models/backendRequests/CommunityRoute/GetFollowedUsersDto";
import {GetUsersFollowingUserDto} from "../../models/backendRequests/CommunityRoute/GetUsersFollowingUserDto";
import {GetUsersFollowingPlaylistDto} from "../../models/backendRequests/CommunityRoute/GetUsersFollowingPlaylistDto";

class UserRequests {

    // READ

    static async getFollowedPlaylists(sessionToken: string) {

        const url = "/Community/getFollowedPlaylists";

        let data: GetFollowedPlaylistsDto = {
            sessionToken: sessionToken,
        }

        const options = {
            method: 'POST',
            url: url,
            data: data
        };


        // @ts-ignore
        let response = await axios(options);
        return response.data as PlaylistDto[];

    }

    static async getFollowedUsers(sessionToken: string) {

        const url = "/Community/getFollowedUsers";

        let data: GetFollowedUsersDto = {
            sessionToken: sessionToken,
        }

        const options = {
            method: 'POST',
            url: url,
            data: data
        };


        // @ts-ignore
        let response = await axios(options);
        return response.data as UserProfileDto[];

    }

    static async getUsersFollowingUser(username: string) {

        const url = "/Community/getFollowedUsers";

        let data: GetUsersFollowingUserDto = {
            username: username,
        }

        const options = {
            method: 'POST',
            url: url,
            data: data
        };


        // @ts-ignore
        let response = await axios(options);
        return response.data as UserProfileDto[];

    }

    static async getUsersFollowingPlaylist(playlistId: string) {

        const url = "/Community/getFollowedUsers";

        let data: GetUsersFollowingPlaylistDto = {
            playlistId: playlistId
        }

        const options = {
            method: 'POST',
            url: url,
            data: data
        };


        // @ts-ignore
        let response = await axios(options);
        return response.data as UserProfileDto[];

    }


    // UPDATE

    static async toggleUserFollow(username: string, sessionToken: string) {

        const url = "/Community/toggleUserFollow";

        let data: ToggleUserFollowDto = {
            username: username,
            sessionToken: sessionToken,
        }

        const options = {
            method: 'POST',
            url: url,
            data: data
        };


        // @ts-ignore
        let response = await axios(options);
        return response.data as string;

    }

    static async togglePlaylistFollow(playlistId: string, sessionToken: string) {

        const url = "/Community/togglePlaylistFollow";

        let data: TogglePlaylistFollowDto = {
            playlistId: playlistId,
            sessionToken: sessionToken,
        }

        const options = {
            method: 'POST',
            url: url,
            data: data
        };


        // @ts-ignore
        let response = await axios(options);
        return response.data as string;

    }


}

export default UserRequests;