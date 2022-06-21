import {GeneralizedResult} from "../../../apiResponses/GenericResults";
import React from "react";

export interface PlaylistItemProperties {
    generalizedResult: GeneralizedResult
    generalizedResults: GeneralizedResult[]
    playlistId: string | undefined
    showingMyPlaylist: boolean
    draggable: boolean
}