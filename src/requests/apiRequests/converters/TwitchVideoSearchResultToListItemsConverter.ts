import {GenericVideoResult} from "../../../models/apiResponses/GenericResults";
import {TwitchSearchVideoResultPage} from "../../../models/apiResponses/TwitchSearchResults";

export class TwitchVideoSearchResultToListItemsConverter {

    private static parseDuration(duration: string) {

        let totalSeconds = 0
        let remainingDuration = duration;

        if (duration.includes("h")) {
            const hoursSplit = duration.split("h")
            const hours = parseInt(hoursSplit[0])
            remainingDuration = hoursSplit[1];
            totalSeconds += hours * 60 * 60
        }

        if (duration.includes("m")) {
            const minutesSplit = remainingDuration.split("m")
            const minutes = parseInt(remainingDuration[0])
            remainingDuration = minutesSplit[1];
            totalSeconds += minutes * 60
        }

        if (duration.includes("s")) {
            const secondsSplit = remainingDuration.split("s")
            const seconds = parseInt(remainingDuration[0])
            totalSeconds += seconds
        }

        return totalSeconds

    }

    public static convert(twitchVideosSearchResult: TwitchSearchVideoResultPage) {

        let items: GenericVideoResult[] = []

        twitchVideosSearchResult.data.map(item => {

            const currentGenericVideoItem: GenericVideoResult = {
                resultType: "GenericVideoResult",
                platformId: item.id,
                title: item.title,
                creator: item.user_name,
                // durationInSeconds: this.parseDuration(item.duration),
                thumbnailUrl: item.thumbnail_url.replace("%{width}", "640").replace("%{height}", "640"),
                // createdAt: item.created_at,
                // views: item.view_count
                playerFactoryName: "MultiPlatformPlayerFactory",
                platformPlayerUrl: "https://www.twitch.tv/videos/"
            }

            items.push(currentGenericVideoItem)

        })

        return items;

    }

}