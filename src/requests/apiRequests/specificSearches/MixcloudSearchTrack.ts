import {ApiSearch} from "./ApiSearch";
import axios from "axios";
import {Platform} from "../platforms/Platform";
import Mixcloud from "../platforms/Mixcloud";
import {GeneralizedResult} from "../../../models/apiResponses/GenericResults";
import {MixcloudTracksPageToListItemsConverter} from "../converters/MixcloudTracksPageToListItemsConverter";

export class MixcloudSearchTrack extends ApiSearch {

    private static mixcloudSearchTrackInstance: ApiSearch

    private constructor() {
        super();
    }

    static getInstance() {

        if (!MixcloudSearchTrack.mixcloudSearchTrackInstance) {
            MixcloudSearchTrack.mixcloudSearchTrackInstance = new MixcloudSearchTrack();
        }
        return MixcloudSearchTrack.mixcloudSearchTrackInstance

    }

    public getPlatform(): Platform {
        return new Mixcloud();
    }

    public getButtonText() {
        return "Mixcloud";
    }

    private async searchMixcloudByName(searchQuery: string) {

        const url = "https://api.mixcloud.com/search/"
            + "?q=" + searchQuery
            + "&type=cloudcast"

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
        let mixcloudTrackInformationResponse = await axios(options);
        let mixcloudTrackInformation: any = mixcloudTrackInformationResponse.data;
        return mixcloudTrackInformation;

    }


    public async getSearchResults(searchQuery: string): Promise<any> {
        const mixcloudTracksPage = await this.searchMixcloudByName(searchQuery);
        return MixcloudTracksPageToListItemsConverter.convert(mixcloudTracksPage)
    }
}