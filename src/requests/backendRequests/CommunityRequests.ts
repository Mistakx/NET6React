import axios from "axios";
import {UserProfileResponseDto} from "../../models/backendResponses/userRoute/UserProfileResponseDto";
import {PlaylistDto} from "../../models/backendRequests/PlaylistRoute/PlaylistDto";
import {EditUserInfo} from "../../models/backendRequests/UserRoute/EditUserInfo";
import {EditUserPassword} from "../../models/backendRequests/UserRoute/EditUserPassword";
import {LoginResponseDto} from "../../models/backendResponses/userRoute/LoginResponseDto";
import {UserProfileDto} from "../../models/backendRequests/UserRoute/UserProfileDto";
import {GetUserPlaylistsDto} from "../../models/backendRequests/UserRoute/GetUserPlaylistsDto";
import {SortPlaylist} from "../../models/backendRequests/PlaylistRoute/SortPlaylist";
import {ToggleUserFollowDto} from "../../models/backendRequests/CommunityRoute/ToggleUserFollowDto";
import {TogglePlaylistFollowDto} from "../../models/backendRequests/CommunityRoute/TogglePlaylistFollowDto";

class UserRequests {

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