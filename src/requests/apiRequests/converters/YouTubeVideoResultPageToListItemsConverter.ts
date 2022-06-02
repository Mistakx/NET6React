import {GenericVideoResult} from "../../../models/apiRequests/GenericResults";
import {YouTubeVideoSearchResultPage} from "../../../models/apiRequests/YouTubeSearchResult";

export class YouTubeVideoResultPageToListItemsConverter {

    public static convert(youtubeVideosSearchResultPage: YouTubeVideoSearchResultPage) {

        let items: GenericVideoResult[] = []

        youtubeVideosSearchResultPage.items.map(item => {

            const currentGenericVideoItem: GenericVideoResult = {
                resultType: "GenericVideoResult",
                platformId: item.id.videoId,
                title: item.snippet.title,
                creator: item.snippet.channelTitle,
                // durationInSeconds: moment.duration(item.details.items[0].contentDetails.duration).asSeconds(),
                thumbnailUrl: item.snippet.thumbnails.high.url,
                // createdAt: item.snippet.publishedAt,
                // views: item.details.items[0].statistics.viewCount
                playerFactoryName: "MultiPlatformPlayerFactory",
                platformPlayerUrl: "https://www.youtube.com/watch?v="
            }

            items.push(currentGenericVideoItem)

        })

        return items;

    }

}