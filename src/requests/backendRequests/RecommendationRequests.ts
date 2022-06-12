import axios from "axios";
import {SaveView} from "../../models/backendRequests/RecommendationsRoute/SaveView";
import {GeneralizedResult} from "../../models/apiResponses/GenericResults";
import {ViewAmounts} from "../../models/backendRequests/RecommendationsRoute/ViewAmounts";
import {GetViews} from "../../models/backendRequests/RecommendationsRoute/GetViews";

class RecommendationRequests {


    static async saveView(generalizedResult: GeneralizedResult, sessionToken: string) {

        const url = "/Recommendations/saveView";

        const data: SaveView = {
            generalizedResult: generalizedResult,
            sessionToken: sessionToken
        }

        const options = {
            method: 'POST',
            url: url,
            data: data
        };

        // @ts-ignore
        let response = await axios(options)
        return response.data as string
    }

    static async getTrending() {

        const url = "/Recommendations/getTrending";

        const options = {
            method: 'GET',
            url: url,
        };

        // @ts-ignore
        let response = await axios(options)
        return response.data as GeneralizedResult[]
    }

    static async getViews(platformId: string, playerFactoryName: string, platformPlayerUrl?: string) {

        const url = "/Recommendations/getViews";

        const data: GetViews = {
            platformId: platformId,
            playerFactoryName: playerFactoryName,
            platformPlayerUrl: platformPlayerUrl
        }
        
        console.log(data)

        const options = {
            method: 'POST',
            url: url,
            data: data
        };

        // @ts-ignore
        let response = await axios(options)
        console.log(response.data)
        return response.data as ViewAmounts
    }

}

export default RecommendationRequests;