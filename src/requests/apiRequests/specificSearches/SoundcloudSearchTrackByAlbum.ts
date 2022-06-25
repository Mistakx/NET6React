import {ApiSearch} from "./ApiSearch";
import axios from "axios";
import {Platform} from "../platforms/Platform";
import Soundcloud from "../platforms/Soundcloud";
import {GeneralizedResult} from "../../../models/apiResponses/GenericResults";
import {SoundcloudTracksPageToListItemsConverter} from "../converters/SoundcloudTracksPageToListItemsConverter";

export class SoundcloudSearchTrack extends ApiSearch {

    private static soundcloudSearchTrackInstance: ApiSearch

    private constructor() {
        super();
    }

    static getInstance() {

        if (!SoundcloudSearchTrack.soundcloudSearchTrackInstance) {
            SoundcloudSearchTrack.soundcloudSearchTrackInstance = new SoundcloudSearchTrack();
        }
        return SoundcloudSearchTrack.soundcloudSearchTrackInstance

    }

    public getPlatform(): Platform {
        return new Soundcloud();
    }

    public getButtonText() {
        return "Soundcloud (Track)";
    }

    private async searchSoundcloudUrlsByName(searchQuery: string) {

        const url = "https://soundcloud4.p.rapidapi.com/search"
            + "?query=" + searchQuery
            + "&type=track"

        const headers = {
            'X-RapidAPI-Key': process.env.REACT_APP_SOUNDCLOUD_API_KEY,
            'X-RapidAPI-Host': 'soundcloud4.p.rapidapi.com',
        }
        const options = {
            method: 'GET',
            headers: headers,
            url,
        };


        // @ts-ignore
        let soundcloudTrackUrlsResponse = await axios(options);

        let soundcloudTracksUrls: {
            index: number;
            artist: string;
            url: string;
            itemName: string;
            name: string;
            type: string;
        }[] = soundcloudTrackUrlsResponse.data;
        return soundcloudTracksUrls;

    }

    private async searchSoundcloudTracksByUrl(searchQuery: string) {

        let soundcloudTrackUrls = await this.searchSoundcloudUrlsByName(searchQuery);

        var soundcloudTracksInformation :any[] = []
        for (var soundcloudTrackUrl of soundcloudTrackUrls) {


            const url = "https://soundcloud4.p.rapidapi.com/song/info"
                + "?track_url=" + soundcloudTrackUrl.url;

            const headers = {
                'X-RapidAPI-Key': process.env.REACT_APP_SOUNDCLOUD_API_KEY,
                'X-RapidAPI-Host': 'soundcloud4.p.rapidapi.com'
            }

            const options = {
                method: 'GET',
                headers: headers,
                url: url,
            };


            // @ts-ignore
            let soundcloudTrackInformationResponse = await axios(options);
            let soundcloudTrackInformation: any = soundcloudTrackInformationResponse.data;
            soundcloudTracksInformation.push(soundcloudTrackInformation)
        }

        return soundcloudTracksInformation;


    }

    /*public async getSearchResults(searchQuery: string, accessToken?: string): Promise<GeneralizedResult[]> {
        return Promise.resolve([]);
    }*/

    public async getSearchResults(searchQuery: string, page: number, limit: number, accessToken?: string): Promise<GeneralizedResult[]> {

        const soundcloudTracksPage = await this.searchSoundcloudTracksByUrl(searchQuery)
        const items = SoundcloudTracksPageToListItemsConverter.convert(soundcloudTracksPage)
        console.log(items)
        return items
    }
}