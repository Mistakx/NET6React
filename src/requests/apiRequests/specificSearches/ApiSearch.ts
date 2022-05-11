import {Platform} from "../platforms/Platform";
import {
    GenericLivestreamResult, GenericResult,
    GenericTrackResult,
    GenericVideoResult
} from "../../../models/apiRequests/GenericResults";

export abstract class ApiSearch {

    abstract getPlatform(): Platform

    abstract getButtonText(): string

    abstract getSearchResults(searchQuery: string, page: number, limit: number, accessToken?: string): Promise<GenericResult[]>

}