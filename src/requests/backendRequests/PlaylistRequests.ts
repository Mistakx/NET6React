import axios from "axios";
import {GenericResult} from "../../models/apiRequests/GenericResults";
import {EditPlaylistTitle} from "../../models/backendRequests/PlaylistRoute/EditPlaylistTitle";
import {AddToPlaylist} from "../../models/backendRequests/PlaylistRoute/AddToPlaylist";
import {CreatePlaylist} from "../../models/backendRequests/PlaylistRoute/CreatePlaylist";

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
        let addToPlaylistResponse = await axios(options);

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



}

export default PlaylistRequests;