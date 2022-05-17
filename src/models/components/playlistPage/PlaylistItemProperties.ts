import {GenericResult} from "../../apiRequests/GenericResults";
import React from "react";

export interface PlaylistItemProperties {
    genericResult: GenericResult
    playlistId: string | undefined
    setDeleteGeneralizedResultResponse: React.Dispatch<React.SetStateAction<string>>
}