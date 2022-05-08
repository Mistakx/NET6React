import {GenericVideoResult} from "../../apiSearches/GenericResults";
import {PlayerCreator} from "../../../playerCreators/PlayerCreator";

export interface VideoSearchItemProperties {
    item: GenericVideoResult
    playerBuilder: PlayerCreator
}