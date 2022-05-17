import {GeneralizedResult} from "../../apiRequests/GenericResults";
import React from "react";

export interface PlaylistItemDropdownProperties {
    genericResult: GeneralizedResult
    playlistId: string | undefined
    setDeleteGeneralizedResultResponse: React.Dispatch<React.SetStateAction<string>>
}