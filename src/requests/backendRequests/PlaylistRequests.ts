import axios from "axios";
import {GenericResult} from "../../models/apiRequests/GenericResults";
import {EditPlaylistTitle} from "../../models/backendRequests/PlaylistRoute/EditPlaylistTitle";
import {AddToPlaylist} from "../../models/backendRequests/PlaylistRoute/AddToPlaylist";
import {CreatePlaylist} from "../../models/backendRequests/PlaylistRoute/CreatePlaylist";
import {DeletePlaylist} from "../../models/backendRequests/PlaylistRoute/DeletePlaylist";
import {DeleteGeneralizedResult} from "../../models/backendRequests/PlaylistRoute/DeleteGeneralizedResult";

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

    static async addToPlaylist(playlistId: string, genericResult: GenericResult) {

        const url = "/Playlist/addToPlaylist";

        let data: AddToPlaylist = {
            ...genericResult,
            playlistId: playlistId
        }

        const options = {
            method: 'POST',
            url: url,
            data: data
        };


        // @ts-ignore
        let addToPlaylistResponse = await axios(options);
        return addToPlaylistResponse.data;
    }

    static async editPlaylistTitle(newTitle: string, playlistId: string, sessionToken: string) {

        const url = "/Playlist/edit";

        let data: EditPlaylistTitle = {
            id: playlistId,
            newTitle: newTitle,
            sessionToken: sessionToken
        }

        const options = {
            method: 'POST',
            url: url,
            data: data
        };


        // @ts-ignore
        let editPlaylistTitleResponse = await axios(options);
        return editPlaylistTitleResponse.data;

    }

    static async createPlaylist(playlistTitle: string, sessionToken: string) {

        const url = "/Playlist/create";

        let data: CreatePlaylist = {
            title: playlistTitle,
            sessionToken: sessionToken
        }

        const options = {
            method: 'POST',
            url: url,
            data: data
        };


        // @ts-ignore
        let addToPlaylistResponse = await axios(options);
        return addToPlaylistResponse.data;

    }

    static async deletePlaylist(playlistId: string, sessionToken: string) {

        const url = "/Playlist/deletePlaylist";

        let data: DeletePlaylist = {
            id: playlistId,
            sessionToken: sessionToken
        }

        const options = {
            method: 'POST',
            url: url,
            data: data
        };


        // @ts-ignore
        let addToPlaylistResponse = await axios(options);
        return addToPlaylistResponse.data;

    }

    static async deleteGeneralizedResult(playlistId: string, generalizedResultDatabaseId: string, sessionToken: string) {

        const url = "/Playlist/deleteGeneralizedResult";

        let data: DeleteGeneralizedResult = {
            playlistId: playlistId,
            generalizedResultDatabaseId: generalizedResultDatabaseId,
            sessionToken: sessionToken
        }

        const options = {
            method: 'POST',
            url: url,
            data: data
        };


        // @ts-ignore
        let deleteGeneralizedResultResponse = await axios(options);
        return deleteGeneralizedResultResponse.data;

    }


}

export default PlaylistRequests;