/**
 * A platform-agnostic result, with no API specific details.
 */
export interface GeneralizedResult {
    resultType: string
    platformId: string
    title: string
    // createdAt: string
    thumbnailUrl: string
    creator: string
    playerFactoryName: string
    platformPlayerUrl?: string
    databaseId?: string
    viewsAmount?: number
}

/**
 * A platform-agnostic video result, with no API specific details.
 */
export interface GenericVideoResult extends GeneralizedResult {
    resultType: "GenericVideoResult"
    // durationInSeconds: number
    // views: number
}

/**
 * A platform-agnostic track result, with no API specific details.
 */
export interface GenericTrackResult extends GeneralizedResult {
    resultType: "GenericTrackResult"
    albumName: string
}

/**
 * A platform-agnostic livestream result, with no API specific details.
 */
export interface GenericLivestreamResult extends GeneralizedResult{
    resultType: "GenericLivestreamResult"
    gameName: string // Name of the game being played on the stream.
}