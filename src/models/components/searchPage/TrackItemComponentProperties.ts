import {GenericTrackResult} from "../../apiSearches/GenericResults";
import {PlayerCreator} from "../../../playerCreators/PlayerCreator";

export interface TrackItemComponentProperties {
    item: GenericTrackResult
    playerBuilder: PlayerCreator
}