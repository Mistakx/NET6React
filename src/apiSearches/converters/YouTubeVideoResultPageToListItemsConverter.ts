import {GenericVideoResult} from "../../models/apiSearches/GenericResults";
import {YouTubeVideoSearchResultPage} from "../../models/apiSearches/YouTubeSearchResult";

export class YouTubeVideoResultPageToListItemsConverter {

    public static convert(youtubeVideosSearchResultPage: YouTubeVideoSearchResultPage) {

        let items: GenericVideoResult[] = []

        youtubeVideosSearchResultPage.items.map(item => {

            const currentGenericVideoItem: GenericVideoResult = {
                id: item.id.videoId,
                title: item.snippet.title,
                creator: item.snippet.channelTitle,
                duration: 0,
                thumbnailUrl: item.snippet.thumbnails.default.url,
                createdAt: item.snippet.publishedAt,
                views: 0
            }

            items.push(currentGenericVideoItem)

        })

        return items;

    }

}