import {GenericLivestreamResult} from "../../apiSearches/GenericResults";
import {PlayerCreator} from "../../../playerCreators/PlayerCreator";

export interface LivestreamItemComponentProperties {
    item: GenericLivestreamResult
    playerWidth: number
    playerHeight: number
    playerBuilder: PlayerCreator
}