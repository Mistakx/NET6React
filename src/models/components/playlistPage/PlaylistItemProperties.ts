import {GeneralizedResult} from "../../apiRequests/GenericResults";
import React from "react";

export interface PlaylistItemProperties {
    generalizedResult: GeneralizedResult
    generalizedResults: GeneralizedResult[]
    playlistId: string | undefined
}