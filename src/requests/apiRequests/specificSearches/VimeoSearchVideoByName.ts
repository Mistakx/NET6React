import {ApiSearch} from "./ApiSearch";
import base64 from "base-64";
import axios from "axios";
import {VimeoSearchVideoResultPage} from "../../../models/apiResponses/VimeoSearchResult";
import {VimeoVideoResultPageToListItemsConverter} from "../converters/VimeoVideoResultPageToListItemsConverter";
import Vimeo from "../platforms/Vimeo";
import {Platform} from "../platforms/Platform";

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
        return new Vimeo();
    }

    public getButtonText() {
        return "Vimeo";
    }

    /**
     * https://developer.vimeo.com/api/reference/videos#search_videos
     */
    public async searchVimeoVideos(searchQuery: string, limit: number, page: number) {

        const vimeoClientId = process.env.REACT_APP_VIMEO_CLIENT_ID;
        const vimeoClientSecret = process.env.REACT_APP_VIMEO_CLIENT_SECRET;

        const url = "https://api.vimeo.com/videos"
            + "?query=" + searchQuery
            + "&page=" + page
            + "&per_page=" + limit
            + "&fields=uri,name,user.name,duration,pictures.base_link,created_time,stats.plays" // Filters the fields to return. https://vimeo.zendesk.com/hc/en-us/articles/360042882251-API-Best-Practices

        const headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + base64.encode(vimeoClientId + ':' + vimeoClientSecret)
        }

        const options = {
            method: 'GET',
            headers: headers,
            withCredentials: false,
            url,
        };


        // @ts-ignore
        let vimeoSearchResponse = await axios(options);
        let vimeoSearchResults: VimeoSearchVideoResultPage = vimeoSearchResponse.data;
        return vimeoSearchResults;

    }

    public async getSearchResults(searchQuery: string, page: number, limit: number) {

        const vimeoVideoResultPage = await this.searchVimeoVideos(searchQuery, limit, page)
        const items = VimeoVideoResultPageToListItemsConverter.convert(vimeoVideoResultPage)
        return items

    }


}