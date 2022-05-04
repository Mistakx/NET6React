import React from "react";

export interface SpotifyPlayerProperties {
    contentId: string
    thumbnailUrl: string
    setPlayerStarted: React.Dispatch<React.SetStateAction<boolean>>
}