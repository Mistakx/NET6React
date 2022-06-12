import axios from "axios";
import {SaveView} from "../../models/backendRequests/RecommendationsRoute/SaveView";
import {GeneralizedResult} from "../../models/apiResponses/GenericResults";
import {GetTrending} from "../../models/backendRequests/RecommendationsRoute/GetTrending";

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
        return response.data as GetTrending[]
    }

}

export default RecommendationRequests;