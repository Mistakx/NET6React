import {GenericResult} from "../../apiRequests/GenericResults";
import React from "react";

export interface PlaylistItemsListProperties {
    playlistItems: GenericResult[] | undefined
    playlistId: string | undefined
}