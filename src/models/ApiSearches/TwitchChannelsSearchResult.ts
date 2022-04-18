/**
 * https://dev.twitch.tv/docs/api/reference#search-channels
 */
export interface TwitchChannelsSearchResult {
    data: TwitchChannel[]
    pagination: Pagination
}

interface TwitchChannel {
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
export interface TwitchSearchResult {
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

interface Pagination extends Object {
    cursor: string  // A cursor value, to be used in a subsequent request to specify the starting point of the next set of results.
}
