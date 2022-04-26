import {GenericVideoResult} from "../../apiSearches/GenericResults";
import {PlayerCreator} from "../../../playerCreators/PlayerCreator";

export interface VideoItemComponentProperties {
    item: GenericVideoResult
    playerBuilder: PlayerCreator
}