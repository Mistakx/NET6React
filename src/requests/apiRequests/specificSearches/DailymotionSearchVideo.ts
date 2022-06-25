import {ApiSearch} from "./ApiSearch";
import axios from "axios";
import {Platform} from "../platforms/Platform";
import Dailymotion from "../platforms/Dailymotion";
import {GeneralizedResult} from "../../../models/apiResponses/GenericResults";
import {DailymotionVideosPageToListItemsConverter} from "../converters/DailymotionVideosPageToListItemsConverter";

export class DailymotionSearchVideo extends ApiSearch {

    private static dailymotionSearchVideoInstance: ApiSearch

    private constructor() {
        super();
    }

    static getInstance() {

        if (!DailymotionSearchVideo.dailymotionSearchVideoInstance) {
            DailymotionSearchVideo.dailymotionSearchVideoInstance = new DailymotionSearchVideo();
        }
        return DailymotionSearchVideo.dailymotionSearchVideoInstance

    }

    public getPlatform(): Platform {
        return new Dailymotion();
    }

    public getButtonText() {
        return "DailyMotion (Videos)";
    }

    private async searchDailymotion(searchQuery: string) {

        const url = "https://api.dailymotion.com/videos?fields=id,url,owner_screenname,thumbnail_url%2Ctitle"
            + "&search=" + searchQuery
            + "&page=1&limit=50"

        const headers = {
            'Content-Type': 'application/json',
            // 'Authorization': 'Bearer ' + accessToken
        }
        const options = {
            method: 'GET',
            headers: headers,
            url,
        };


        // @ts-ignore
        let dailymotionTrackInformationResponse = await axios(options);
        let dailymotionTrackInformation: any = dailymotionTrackInformationResponse.data;
        return dailymotionTrackInformation;

    }


    public async getSearchResults(searchQuery: string): Promise<any> {
        const dailymotionVideosPage = await this.searchDailymotion(searchQuery);
        console.log("dailymotionVideosPage")
        console.log(dailymotionVideosPage)

        let items: any
        try {
            items = DailymotionVideosPageToListItemsConverter.convert(dailymotionVideosPage)
        }
        catch (e) {
            console.error(e);
        }
        console.log("Propagated exception 3")
        return items

    }
}