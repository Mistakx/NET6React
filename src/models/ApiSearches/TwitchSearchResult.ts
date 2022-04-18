/**
 * https://dev.twitch.tv/docs/api/reference#get-clips
 */
export interface TwitchSearchResult {
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

// TODO: Twitch search pagination interface
interface Pagination extends Object {

}
