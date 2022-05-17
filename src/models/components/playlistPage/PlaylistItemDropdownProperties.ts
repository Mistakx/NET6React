import {GenericResult} from "../../apiRequests/GenericResults";
import React from "react";

export interface PlaylistItemDropdownProperties {
    genericResult: GenericResult
    playlistId: string | undefined
    setDeleteGeneralizedResultResponse: React.Dispatch<React.SetStateAction<string>>
}