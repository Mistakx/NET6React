import {ApiSearch} from "./ApiSearch";
import axios from "axios";
import {Platform} from "../platforms/Platform";
import Radio from "../platforms/Radio";
import {RadioPageToListItemsConverter} from "../converters/RadioPageToListItemsConverter";
import {RadioSearchByIdResult, RadioSearchByNameResult} from "../../../models/apiResponses/RadioSearchResult";

export class RadioSearchByName extends ApiSearch {

    private static radioSearchInstance: ApiSearch

    private constructor() {
        super();
    }

    static getInstance() {

        if (!RadioSearchByName.radioSearchInstance) {
            RadioSearchByName.radioSearchInstance = new RadioSearchByName();
        }
        return RadioSearchByName.radioSearchInstance

    }

    public getPlatform(): Platform {
        return new Radio();
    }

    public getButtonText() {
        return "Radio";
    }

    private async searchRadioByName(searchQuery: string) {

        const url = "https://radio.garden/api/search"
            + "?q=" + searchQuery

        const headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
        const options = {
            method: 'GET',
            headers: headers,
            url,
        };

        // @ts-ignore
        let radioInformationResponse = await axios(options);

        return radioInformationResponse.data as RadioSearchByNameResult

    }

    private async searchRadioById(searchQuery: string) {

        let radioName = await this.searchRadioByName(searchQuery);

        let radiosInformation: RadioSearchByIdResult[] = []

        for (let radioNames of radioName.hits.hits) {

            const url = "http://radio.garden/api/ara/content/channel/"
                + radioNames._source.url.substr(-8);

            const headers = {
                'Content-Type': 'application/json',
            }

            const options = {
                method: 'GET',
                headers: headers,
                url: url,
            };

            // @ts-ignore
            let radioInformationResponse = await axios(options);
            radiosInformation.push(radioInformationResponse.data)

        }

        return radiosInformation;

    }

    public async getSearchResults(searchQuery: string): Promise<any> {
        try {
            const radioPage = await this.searchRadioById(searchQuery);
            return RadioPageToListItemsConverter.convert(radioPage)
        } catch (e) {
            console.log(e)
        }

    }
}