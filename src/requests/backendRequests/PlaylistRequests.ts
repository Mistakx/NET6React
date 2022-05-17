import axios from "axios";
import {GeneralizedResult} from "../../models/apiRequests/GenericResults";
import {EditPlaylistTitle} from "../../models/backendRequests/PlaylistRoute/EditPlaylistTitle";
import {AddToPlaylist} from "../../models/backendRequests/PlaylistRoute/AddToPlaylist";
import {CreatePlaylist} from "../../models/backendRequests/PlaylistRoute/CreatePlaylist";
import {DeletePlaylist} from "../../models/backendRequests/PlaylistRoute/DeletePlaylist";
import {DeleteGeneralizedResult} from "../../models/backendRequests/PlaylistRoute/DeleteGeneralizedResult";
import {PlaylistBasicDetails} from "../../models/backendRequests/PlaylistRoute/PlaylistBasicDetails";
import {PlaylistGeneralizedResults} from "../../models/backendRequests/PlaylistRoute/PlaylistGeneralizedResults";

class PlaylistRequests {

    static async getPlaylistGeneralizedResults(playlistId: string) {
        const url = "/Playlist/getGeneralizedResults/" + playlistId;

        const options = {
            method: 'GET',
            url: url,
        };

        // @ts-ignore
        let playlistResponse = await axios(options);
        return playlistResponse.data as PlaylistGeneralizedResults;

    }

    static async getPlaylistBasicDetails(playlistId: string) {
        const url = "/Playlist/getBasicDetails/" + playlistId;

        const options = {
            method: 'GET',
            url: url,
        };

        // @ts-ignore
        let playlistResponse = await axios(options);
        return playlistResponse.data as PlaylistBasicDetails;

    }

    static async addToPlaylist(playlistId: string, genericResult: GeneralizedResult) {

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
        return addToPlaylistResponse.data as string;
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
        return editPlaylistTitleResponse.data as string;

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
        return addToPlaylistResponse.data as string;

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
        return addToPlaylistResponse.data as string;

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
        return deleteGeneralizedResultResponse.data as string;

    }

    static async setAsCover(playlistId: string, generalizedResultDatabaseId: string, sessionToken: string) {

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
        return deleteGeneralizedResultResponse.data as string;

    }


}

export default PlaylistRequests;