export abstract class PlayerCreator {

    private readonly platformPlayerUrl;
    private readonly playerWidth;
    private readonly playerHeight;

    public constructor(playerHeight: number, playerWidth: number, platformPlayerUrl?: string,) {
        this.platformPlayerUrl = platformPlayerUrl;
        this.playerWidth = playerWidth;
        this.playerHeight = playerHeight;
    }

    public getPlatformPlayerUrl(): string | undefined {
        return this.platformPlayerUrl;
    }

    public getPlayerWidth(): number {
        return this.playerWidth;
    }

    public getPlayerHeight(): number {
        return this.playerHeight;
    }


    abstract create(contentId: string, trackThumbnailUrl?: string): JSX.Element

}