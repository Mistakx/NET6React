import {GenericTrackResult} from "../../../apiRequests/GenericResults";
import {PlayerCreator} from "../../../../playerCreators/PlayerCreator";
import React from "react";

export interface TrackSearchItemProperties {
    item: GenericTrackResult
    playerCreator: PlayerCreator
}