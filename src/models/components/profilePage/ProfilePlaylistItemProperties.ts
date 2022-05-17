import {PlaylistBasicDetails} from "../../backendRequests/PlaylistRoute/PlaylistBasicDetails";
import React from "react";

export interface ProfilePlaylistItemProperties {
    basicDetails: PlaylistBasicDetails
    setDeletePlaylistResponse: React.Dispatch<React.SetStateAction<string>>
}