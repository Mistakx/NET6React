import {GenericVideoResult} from "../../../models/apiResponses/GenericResults";
import {YouTubeVideoSearchResultPage} from "../../../models/apiResponses/YouTubeSearchResult";

export class YouTubeVideoResultPageToListItemsConverter {

    public static convert(youtubeVideosSearchResultPage: YouTubeVideoSearchResultPage) {

        let items: GenericVideoResult[] = []

        youtubeVideosSearchResultPage.items.map(item => {

            const currentGenericVideoItem: GenericVideoResult = {
                platformName: "YouTube",
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