export interface ApiResultToVideoResultAdapter {
    id: string;
    title: string;
    thumbnail: string;
    duration: number;
    views: number;
    createdAt: Date;
    channel: string;
}

export interface ApiResultToTrackResultAdapter {
    id: string;
    name: string;
    albumCover: string;
    duration: number;
    views: number;
    createdAt: Date;
    artist: string;

}

export interface ApiResultToLivestreamResultAdapter {
    broadcasterLogin: string // Login of the broadcaster.
    displayName: string //	Display name of the broadcaster.
    gameId: string // ID of the game being played on the stream.
    gameName: string // Name of the game being played on the stream.
    id: string // Channel ID.
    thumbnailUrl: string // Thumbnail URL of the stream. All image URLs have variable width and height. You can replace {width} and {height} with any values to get that size image.
    title: string // Stream title.
    startedAt: string // UTC timestamp. Returns an empty string if the channel is not live.
    playerUrl: string // URL of the player.
}