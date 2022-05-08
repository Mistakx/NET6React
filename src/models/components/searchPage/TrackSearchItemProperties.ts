import {GenericTrackResult} from "../../apiSearches/GenericResults";
import {PlayerCreator} from "../../../playerCreators/PlayerCreator";

export interface TrackSearchItemProperties {
    item: GenericTrackResult
    playerBuilder: PlayerCreator
}