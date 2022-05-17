/**
 * A platform-agnostic result, with no API specific details.
 */
export interface GeneralizedResult {
    interface: string
    id: string
    title: string
    // createdAt: string
    thumbnailUrl: string
    creator: string
    playerFactoryName: string
    platformPlayerUrl?: string
    databaseId?: string
}

/**
 * A platform-agnostic video result, with no API specific details.
 */
export interface GenericVideoResult extends GeneralizedResult {
    interface: "GenericVideoResult"
    // durationInSeconds: number
    // views: number
}

/**
 * A platform-agnostic track result, with no API specific details.
 */
export interface GenericTrackResult extends GeneralizedResult {
    interface: "GenericTrackResult"
    albumName: string
}

/**
 * A platform-agnostic livestream result, with no API specific details.
 */
export interface GenericLivestreamResult extends GeneralizedResult{
    interface: "GenericLivestreamResult"
    gameName: string // Name of the game being played on the stream.
}