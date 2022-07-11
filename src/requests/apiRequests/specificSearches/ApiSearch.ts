import {Platform} from "../platforms/Platform";
import {GeneralizedResult} from "../../../models/apiResponses/GenericResults";

export abstract class ApiSearch {

    abstract getPlatform(): Platform

    abstract getButtonText(): string

    abstract getSearchResults(searchQuery: string, page: number, limit: number, accessToken?: string): Promise<GeneralizedResult[]>

}