import {SpecificSearch} from "./SpecificSearch";
import base64 from "base-64";
import axios from "axios";
import {VimeoSearchVideoResult} from "../models/ApiSearches/VimeoSearchResult";
import {SpecificSearchType} from "../models/ApiSearches/PlatformSearches";

export class VimeoSearchVideoByName extends SpecificSearch {

    private static vimeoSearchVideoByName: VimeoSearchVideoByName

    private constructor() {
        super();
    }

    public static getInstance() {

        if (!VimeoSearchVideoByName.vimeoSearchVideoByName) {
            VimeoSearchVideoByName.vimeoSearchVideoByName = new VimeoSearchVideoByName();
        }

        return VimeoSearchVideoByName.vimeoSearchVideoByName

    }

    public getType(): SpecificSearchType {
        return "VimeoSearchVideoByName"
    }

    public getButtonText() {
        return "Vimeo";
    }

    /**
     * https://developer.vimeo.com/api/reference/videos#search_videos
     */
    public async searchVimeoVideos(searchQuery: string, limit: number = 20, page: number = 1)  {

        const vimeoClientId = process.env.REACT_APP_VIMEO_CLIENT_ID;
        const vimeoClientSecret = process.env.REACT_APP_VIMEO_CLIENT_SECRET;

        const url = "https://api.vimeo.com/videos"
            + "?query=" + searchQuery
            + "&page=" + page
            + "&per_page=" + limit

        const headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + base64.encode(vimeoClientId + ':' + vimeoClientSecret)
        }
        const options = {
            method: 'GET',
            headers: headers,
            url,
        };

        // @ts-ignore
        let vimeoSearchResponse = await axios(options);
        let vimeoSearchResults: VimeoSearchVideoResult = vimeoSearchResponse.data;
        return vimeoSearchResults;


    }


}