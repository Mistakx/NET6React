type YouTubeSpecificSearch = "YouTubeSearchVideoByGeneral"
type SpotifySpecificSearch = "SpotifySearchTrackByName" | "SpotifySearchTrackByAlbum " | "SpotifySearchPodcastsByName"
type VimeoSpecificSearch = "VimeoSearchVideoByName"
type TwitchSpecificSearch = "TwitchSearchClipByChannel" | "TwitchSearchClipByGame" | "TwitchSearchVideoByChannel" | "TwitchSearchVideoByGame" |"TwitchSearchLivestreamByGeneral"
export type SpecificSearchType = YouTubeSpecificSearch | SpotifySpecificSearch | VimeoSpecificSearch | TwitchSpecificSearch

export type SearchListType = "Video" | "Track" | "Livestream"

export type Platform = "YouTube" | "Spotify" | "Vimeo" | "Twitch"