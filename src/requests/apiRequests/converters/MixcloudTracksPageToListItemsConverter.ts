import {GenericTrackResult} from "../../../models/apiResponses/GenericResults";

export class MixcloudTracksPageToListItemsConverter {

    public static convert(mixcloudTracksPage: any) {

        let items: GenericTrackResult[] = []

        mixcloudTracksPage.data.map((item: any) => {

            const currentGenericTrackItem: GenericTrackResult = {
                resultType: "GenericTrackResult",
                platformId: item.slug,
                title: item.name,
                creator: item.user.username,
                thumbnailUrl: item.pictures.large, // 0-640x640; 1-300x300; 2-64x64
                // createdAt: item.album.release_date,
                albumName: item.slug,
                playerFactoryName: "MixcloudPlayerFactory",
                platformPlayerUrl: item.url
            }

            items.push(currentGenericTrackItem)

        })

        return items;

    }

}