/**
 * A platform-agnostic result, with no API specific details.
 */
export interface GeneralizedResult {
    platformName: string;
    resultType: string
    platformId: string
    title: string
    thumbnailUrl: string
    creator: string
    playerFactoryName: string
    weeklyViewsAmount?: number
    totalViewsAmount?: number
    platformPlayerUrl?: string
    databaseId?: string
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
    albumName?: string
}

export interface GenericPodcastResult extends GeneralizedResult {
    resultType: "GenericPodcastResult"
    url: string
    href: string
}

/**
 * A platform-agnostic livestream result, with no API specific details.
 */
export interface GenericLivestreamResult extends GeneralizedResult{
    resultType: "GenericLivestreamResult"
    gameName?: string // Name of the game being played on the stream.
}