import {GenericLivestreamResult, GenericVideoResult} from "../../apiSearches/GenericResults";
import {PlayerBuilder} from "../../../players/PlayerBuilder";

export interface LivestreamItemComponentProperties {
    item: GenericLivestreamResult
    playerUrl: string
    playerWidth: number
    playerHeight: number
    playerBuilder: PlayerBuilder
}