import React from "react";

export interface TwitchClipPlayerProperties {
    contentId: string
    setPlayerStarted: React.Dispatch<React.SetStateAction<boolean>>
}