import {GenericLivestreamResult, GenericVideoResult} from "../../apiSearches/GenericResults";
import {PlayerCreator} from "../../../playerCreators/PlayerCreator";

export interface LivestreamItemComponentProperties {
    item: GenericLivestreamResult
    playerUrl: string
    playerWidth: number
    playerHeight: number
    playerBuilder: PlayerCreator
}