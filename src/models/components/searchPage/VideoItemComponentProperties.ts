import {GenericVideoResult} from "../../apiSearches/GenericResults";
import {PlayerBuilder} from "../../../players/PlayerBuilder";

export interface VideoItemComponentProperties {
    item: GenericVideoResult
    playerUrl: string
    playerWidth: number
    playerHeight: number
    playerBuilder: PlayerBuilder
}