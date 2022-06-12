/**
 * https://dev.twitch.tv/docs/api/reference#search-channels
 */
export interface TwitchSearchChannelsResultPage {
    data: TwitchChannel[]
    pagination: Pagination
}

export interface TwitchChannel {
    broadcaster_language: string //	Channel language (Broadcaster Language field from the Channels service). A language value is either the ISO 639-1 two-letter code for a supported stream language or “other”.
    broadcaster_login: string // Login of the broadcaster.
    display_name: string //	Display name of the broadcaster.
    game_id: string // ID of the game being played on the stream.
    game_name: string // Name of the game being played on the stream.
    id: string // Channel ID.
    is_live: boolean // Indicates if the channel is currently live.
    tag_ids: string[] // Tag IDs that apply to the stream. This array only contains strings when a channel is live. For all possibilities, see List of All Tags. Category Tags are not returned.
    thumbnail_url: string // Thumbnail URL of the stream. All image URLs have variable width and height. You can replace {width} and {height} with any values to get that size image.
    title: string // Stream title.
    started_at: string // UTC timestamp. Returns an empty string if the channel is not live.
}

/**
 * https://dev.twitch.tv/docs/api/reference#get-clips
 */
export interface TwitchSearchClipsResultPage {
    data: TwitchClip[]
    pagination: Pagination
}

export interface TwitchClip {
    id: string // ID of the clip being queried.
    url: string // URL where the clip can be viewed.
    embed_url: string // URL to embed the clip.
    broadcaster_id: string // User ID of the stream from which the clip was created.
    broadcaster_name: string // Display name corresponding to broadcaster_id.
    creator_id: string // ID of the user who created the clip.
    creator_name: string //	Display name corresponding to creator_id.
    video_id: string //	ID of the video from which the clip was created.
    game_id: string // ID of the game assigned to the stream when the clip was created.
    language: string //	Language of the stream from which the clip was created. A language value is either the ISO 639-1 two-letter code for a supported stream language or “other”.
    title: string // Title of the clip.
    view_count: number // Number of times the clip has been viewed.
    created_at: string // Date when the clip was created.
    thumbnail_url: string // URL of the clip thumbnail.
    duration: number // Duration of the Clip in seconds (up to 0.1 precision).
}

/**
 * https://dev.twitch.tv/docs/api/reference#search-categories
 */
export interface TwitchSearchCategoriesResultPage {
    data: TwitchCategory[]
    pagination: Pagination
}

interface TwitchCategory {
    id: string // ID of the category being queried.
    name: string // Name of the category being queried.
    box_art_url: string // URL of the category box art.
}

/**
 * https://dev.twitch.tv/docs/api/reference#get-videos
 */
export interface TwitchSearchVideoResultPage {
    data: TwitchVideo[]
    pagination: Pagination
}

export interface TwitchVideo {
    id: string // ID of the video.
    stream_id: string // ID of the stream that the video originated from if the type is "archive". Otherwise set to null.
    user_id: string // ID of the user who owns the video.
    user_login: string // Login of the user who owns the video.
    user_name: string // Display name corresponding to user_id.
    title: string // Title of the video.
    description: string // Description of the video.
    created_at: string // Date when the video was created.
    published_at: string // Date when the video was published.
    url: string // URL of the video.
    thumbnail_url: string // Template URL for the thumbnail of the video.
    viewable: string // Indicates whether the video is publicly viewable. Valid values: "public", "private".
    view_count: number // Number of times the video has been viewed.
    language: string // Language of the video. A language value is either the ISO 639-1 two-letter code for a supported stream language or “other”.
    type: string // Type of video. Valid values: "upload", "archive", "highlight".
    duration: string // Length of the video.
    muted_segments: {
        duration: number // Duration of the muted segment.
        offset: number // Offset in the video at which the muted segment begins.
    }[] // Array of muted segments in the video. If there are no muted segments, the value will be null.

}


interface Pagination extends Object {
    cursor: string  // A cursor value, to be used in a subsequent request to specify the starting point of the next set of results.
}
