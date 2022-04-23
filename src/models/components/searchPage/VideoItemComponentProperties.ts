import {GenericVideoResult} from "../../apiSearches/GenericResults";
import {PlayerCreator} from "../../../playerCreators/PlayerCreator";

export interface VideoItemComponentProperties {
    item: GenericVideoResult
    playerUrl: string
    playerWidth: number
    playerHeight: number
    playerBuilder: PlayerCreator
}