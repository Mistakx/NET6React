import {GenericTrackResult} from "../../../models/apiResponses/GenericResults";

export class DailymotionVideosPageToListItemsConverter {

    public static convert(dailymotionVideosPage: any) {

        let items: GenericTrackResult[] = []

        dailymotionVideosPage.list.map((item: any) => {

            const currentGenericTrackItem: GenericTrackResult = {
                platformName: "Dailymotion",
                resultType: "GenericTrackResult",
                platformId: item.id,
                title: item.title,
                creator: item.owner_screenname,
                thumbnailUrl: item.thumbnail_url, // 0-640x640; 1-300x300; 2-64x64
                // createdAt: item.album.release_date,
                albumName: "",
                playerFactoryName: "MultiPlatformPlayerFactory",
                platformPlayerUrl: item.url
            }

            items.push(currentGenericTrackItem)

        })

        return items;

    }

}