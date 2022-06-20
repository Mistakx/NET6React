import axios from "axios";
import {GeneralizedResult} from "../../models/apiResponses/GenericResults";
import {EditPlaylist} from "../../models/backendRequests/PlaylistRoute/EditPlaylist";
import {AddContentToPlaylistDto} from "../../models/backendRequests/PlaylistRoute/AddContentToPlaylistDto";
import {CreatePlaylist} from "../../models/backendRequests/PlaylistRoute/CreatePlaylist";
import {DeletePlaylist} from "../../models/backendRequests/PlaylistRoute/DeletePlaylist";
import {DeleteContent} from "../../models/backendRequests/PlaylistRoute/DeleteContent";
import {PlaylistDto} from "../../models/backendRequests/PlaylistRoute/PlaylistDto";
import {SetPlaylistCoverDto} from "../../models/backendRequests/PlaylistRoute/SetPlaylistCoverDto";
import {SortPlaylistContent} from "../../models/backendRequests/PlaylistRoute/SortPlaylistContent";
import {GetPlaylistInformationDto} from "../../models/backendRequests/PlaylistRoute/GetPlaylistInformationDto";

class PlaylistRequests {

    // CREATE
    static async createPlaylist(playlistTitle: string, visibility: "Public" | "Private", description: string, sessionToken: string) {

        const url = "/Playlist/createPlaylist";

        let data: CreatePlaylist = {
            title: playlistTitle,
            sessionToken: sessionToken,
            visibility: visibility,
            description: description
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


    // READ
    static async getPlaylistInformation(playlistId: string, sessionToken: string) {
        const url = "/Playlist/getPlaylistInformation";

        const data: GetPlaylistInformationDto = {
            playlistId: playlistId,
            sessionToken: sessionToken
        }

        const options = {
            method: 'POST',
            url: url,
            data: data
        };

        // @ts-ignore
        let playlistResponse = await axios(options);
        return playlistResponse.data as PlaylistDto;

    }

    static async getPlaylistContent(playlistId: string) {
        const url = "/Playlist/getPlaylistContent/" + playlistId;

        const options = {
            method: 'GET',
            url: url,
        };

        // @ts-ignore
        let playlistResponse = await axios(options);
        return playlistResponse.data;

    }


    // UPDATE
    static async sortContent(playlistId: string, generalizedResultDatabaseId: string, newIndex: number, sessionToken: string) {

        const url = "/Playlist/sortContent";

        let data: SortPlaylistContent = {
            playlistId: playlistId,
            generalizedResultDatabaseId: generalizedResultDatabaseId,
            newIndex: newIndex,
            sessionToken: sessionToken
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

    static async addContentToPlaylist(playlistId: string, genericResult: GeneralizedResult) {

        const url = "/Playlist/addContent";

        let data: AddContentToPlaylistDto = {
            content: genericResult,
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

    static async setCover(playlistId: string, thumbnailUrl: string, sessionToken: string) {

        const url = "/Playlist/setCover";

        let data: SetPlaylistCoverDto = {
            playlistId: playlistId,
            coverUrl: thumbnailUrl,
            sessionToken: sessionToken
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

    static async editPlaylist(playlistId: string, newTitle: string, newVisibility: "Public" | "Private", newDescription: string, sessionToken: string) {

        const url = "/Playlist/edit";

        let data: EditPlaylist = {
            playlistId: playlistId,
            title: newTitle,
            sessionToken: sessionToken,
            visibility: newVisibility,
            description: newDescription
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


    // DELETE
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

    static async deleteContent(playlistId: string, generalizedResultDatabaseId: string, sessionToken: string) {

        const url = "/Playlist/deleteContent";

        let data: DeleteContent = {
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