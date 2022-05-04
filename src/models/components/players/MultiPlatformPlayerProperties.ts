import React from "react";

export interface MultiPlatformPlayerProperties {
    contentId: string
    playerUrl: string
    setPlayerStarted: React.Dispatch<React.SetStateAction<boolean>>
}