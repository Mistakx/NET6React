import {ApiSearch} from "./ApiSearch";
import axios from "axios";
import {Platform} from "../platforms/Platform";
import Radio from "../platforms/Radio";
import {GeneralizedResult} from "../../../models/apiResponses/GenericResults";
import {RadioPageToListItemsConverter} from "../converters/RadioPageToListItemsConverter";

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
            'Content-Type': 'application/json',
        }
        const options = {
            method: 'GET',
            headers: headers,
            url,
        };


        // @ts-ignore
        let radioInformationResponse = await axios(options);

        let radioSource: {
            code : string;
            url : string;
            subtitle : string;
            title : string;
        } 
        
        let radioInformation: {
            _id: number;
            _source : typeof radioSource;
        }[] = radioInformationResponse.data.hits.hits
        
        //let radioInformation: any = radioInformationResponse.data;
        return radioInformation;
        
    }

    
    private async searchRadioByID(searchQuery: string) {

        let radioName = await this.searchRadioByName(searchQuery);

        var radiosInformation :any[] = []
        
        for (var radioNames of radioName) {

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

            let radioData: {
                code : string;
                url : string;
                website : string;
                title : string;
            }

            let radioInformation: {
                id : typeof radioData,
            } [] = radioInformationResponse.data.data;
            
            radiosInformation.push(radioInformation)
            
        }
        
        return radiosInformation;
        
    }
    
    public async getSearchResults(searchQuery: string): Promise<any> {
        try {
            const radioPage = await this.searchRadioByID(searchQuery);
            return RadioPageToListItemsConverter.convert(radioPage)
        }
        catch(e){
            console.log(e)
        }
        
    }
}