import {GenericLivestreamResult} from "../../apiSearches/GenericResults";
import {PlayerCreator} from "../../../playerCreators/PlayerCreator";

export interface LivestreamSearchItemProperties {
    item: GenericLivestreamResult
    playerBuilder: PlayerCreator
}