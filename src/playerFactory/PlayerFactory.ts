import React from "react";

export abstract class PlayerFactory {

    private readonly platformPlayerUrl;

    public constructor(platformPlayerUrl?: string,) {
        this.platformPlayerUrl = platformPlayerUrl;
    }

    public getPlatformPlayerUrl() {
        return this.platformPlayerUrl;
    }

    abstract create(contentId: string, setPlayerStarted: React.Dispatch<React.SetStateAction<boolean>>, trackThumbnailUrl: string | null): JSX.Element

}