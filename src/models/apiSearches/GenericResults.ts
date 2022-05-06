/**
 * A platform-agnostic result, with no API specific details.
 */
export interface GenericResult {
    id: string
    title: string
    // createdAt: string
    thumbnailUrl: string
    creator: string
}

/**
 * A platform-agnostic video result, with no API specific details.
 */
export interface GenericVideoResult extends GenericResult {
    // durationInSeconds: number
    // views: number
}

/**
 * A platform-agnostic track result, with no API specific details.
 */
export interface GenericTrackResult extends GenericResult {
    duration: number
    albumName: string
}

/**
 * A platform-agnostic livestream result, with no API specific details.
 */
export interface GenericLivestreamResult extends GenericResult{
    gameName: string // Name of the game being played on the stream.
}