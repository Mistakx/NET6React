import {ApiSearch} from "./ApiSearch";
import base64 from "base-64";
import axios from "axios";
import {VimeoSearchVideoResultPage} from "../../models/apiSearches/VimeoSearchResult";
import {Platform} from "../../models/apiSearches/PlatformSearches";
import {MultiPlatformPlayerCreator} from "../../playerCreators/MultiPlatformPlayerCreator";
import {VimeoVideoResultPageToListItemsConverter} from "../converters/VimeoVideoResultPageToListItemsConverter";
import {VideoSearchList} from "../../searchLists/VideoSearchList";

export class VimeoSearchVideoByName extends ApiSearch {

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

    public getPlatform(): Platform {
        return "Vimeo";
    }

    public getButtonText() {
        return "Vimeo";
    }

    /**
     * https://developer.vimeo.com/api/reference/videos#search_videos
     */
    public async searchVimeoVideos(searchQuery: string, limit: number, page: number)  {

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
        let vimeoSearchResults: VimeoSearchVideoResultPage = vimeoSearchResponse.data;
        return vimeoSearchResults;


    }

    public async getSearchList(searchQuery: string, accessToken: string, limit: number, page: number) {

        const vimeoVideoResultPage = await this.searchVimeoVideos(searchQuery, limit, page)
        const items = VimeoVideoResultPageToListItemsConverter.convert(vimeoVideoResultPage)
        const searchList = new VideoSearchList(items, "https://vimeo.com/", new MultiPlatformPlayerCreator())
        return searchList

    }


}