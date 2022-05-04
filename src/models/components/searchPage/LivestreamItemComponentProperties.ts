import {GenericLivestreamResult} from "../../apiSearches/GenericResults";
import {PlayerCreator} from "../../../playerCreators/PlayerCreator";

export interface LivestreamItemComponentProperties {
    item: GenericLivestreamResult
    playerBuilder: PlayerCreator
}