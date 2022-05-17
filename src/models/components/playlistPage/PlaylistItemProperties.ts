import {GeneralizedResult} from "../../apiRequests/GenericResults";
import React from "react";

export interface PlaylistItemProperties {
    genericResult: GeneralizedResult
    playlistId: string | undefined
    setDeleteGeneralizedResultResponse: React.Dispatch<React.SetStateAction<string>>
}