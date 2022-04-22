import {GenericTrackResult} from "../../apiSearches/GenericResults";
import {PlayerBuilder} from "../../../players/PlayerBuilder";

export interface TrackItemComponentProperties {
    item: GenericTrackResult
    playerUrl: string
    playerWidth: number
    playerHeight: number
    playerBuilder: PlayerBuilder
}