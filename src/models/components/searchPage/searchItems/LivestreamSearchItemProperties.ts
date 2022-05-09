import {GenericLivestreamResult} from "../../../apiRequests/GenericResults";
import {PlayerCreator} from "../../../../playerCreators/PlayerCreator";
import React from "react";

export interface LivestreamSearchItemProperties {
    item: GenericLivestreamResult
    playerBuilder: PlayerCreator
}