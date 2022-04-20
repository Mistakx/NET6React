// TODO: Check if necessary, or if specific search type suffices

// https://developers.google.com/youtube/v3/docs/search/list
type YouTubeSpecificSearch = "YouTubeSearchVideoByGeneral"

type SpotifySpecificSearch = "SpotifySearchTrackByName" | "SpotifySearchTrackByAlbum"

// https://developer.vimeo.com/api/reference/videos#search_videos
type VimeoSpecificSearch = "VimeoSearchVideoByName"

type TwitchSpecificSearch = "TwitchSearchClipByChannel" | "TwitchSearchClipByGame" | "TwitchSearchVideoByChannel" | "TwitchSearchVideoByGame" |"TwitchSearchChannelByGeneral"

export type SpecificSearchType = YouTubeSpecificSearch | SpotifySpecificSearch | VimeoSpecificSearch | TwitchSpecificSearch
export type SearchResult = "YouTubeVideo" | "SpotifyTrack" | "VimeoVideo" | "TwitchClip" | "TwitchVideo" | "TwitchLive"

export class SpecificSearch {



}