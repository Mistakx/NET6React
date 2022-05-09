
export interface YouTubeVideoSearchResultPage extends GoogleApiYouTubePaginationInfo<YouTubeVideo> {
}

export interface YouTubeVideo extends GoogleApiYouTubeSearchResource {
    details: YouTubeVideoDetailsSearchResultPage;
}

export interface YouTubeVideoDetailsSearchResultPage extends GoogleApiYouTubePaginationInfo<YouTubeVideoDetails> {
}

export interface YouTubeVideoDetails extends GoogleApiYouTubeVideoResource {}
