import {GenericTrackResult} from "../../apiSearches/GenericResults";
import {PlayerCreator} from "../../../playerCreators/PlayerCreator";

export interface TrackItemComponentProperties {
    item: GenericTrackResult
    playerUrl: string
    playerWidth: number
    playerHeight: number
    playerBuilder: PlayerCreator
}