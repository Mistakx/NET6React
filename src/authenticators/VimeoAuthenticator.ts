import base64 from "base-64";
import axios from "axios";
import {VimeoSearch} from "../models/ApiRequests/VimeoSearch";

/**
 * Hook responsible for getting a Vimeo access token.
 */
class VimeoAuthenticator {

    private static vimeoAuthenticator: VimeoAuthenticator;
    private static vimeoClientId = process.env.REACT_APP_VIMEO_CLIENT_ID;
    private static vimeoClientSecret = process.env.REACT_APP_VIMEO_CLIENT_SECRET;
    private static vimeoClientAccessToken = process.env.REACT_APP_VIMEO_CLIENT_ACCESS_TOKEN;

    private constructor() {
    }

    public static getInstance() {
        if (VimeoAuthenticator.vimeoAuthenticator === undefined) {
            VimeoAuthenticator.vimeoAuthenticator = new VimeoAuthenticator();
        }

        return VimeoAuthenticator.vimeoAuthenticator;
    }

    public async searchVideo(searchQuery: string) {

        const url = "https://api.vimeo.com/videos?query=" + searchQuery
        const headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + base64.encode(VimeoAuthenticator.vimeoClientId + ':' + VimeoAuthenticator.vimeoClientSecret)
        }
        const options = {
            method: 'GET',
            headers: headers,
            url,
        };

        // @ts-ignore
        let vimeoSearchResponse = await axios(options);
        let vimeoSearchResults: VimeoSearch = vimeoSearchResponse.data;
        return vimeoSearchResults;


    }

    public async searchVideoThumbnail(videoId: string) {

        const url = "https://api.vimeo.com/videos/" + videoId + "/pictures/"
        const headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + base64.encode(VimeoAuthenticator.vimeoClientId + ':' + VimeoAuthenticator.vimeoClientSecret)
        }
        const options = {
            method: 'GET',
            headers: headers,
            url,
        };

        // @ts-ignore
        let vimeoSearchResponse: any = await axios(options);
        let vimeoSearchResults: string = vimeoSearchResponse.base_link;
        return vimeoSearchResults;


    }

}

export default VimeoAuthenticator;
