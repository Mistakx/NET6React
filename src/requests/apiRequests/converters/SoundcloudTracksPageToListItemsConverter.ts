import {GeneralizedResult, GenericTrackResult} from "../../../models/apiResponses/GenericResults";
import {SoundcloudSearchTrack} from "../specificSearches/SoundcloudSearchTrackByName";

export class SoundcloudTracksPageToListItemsConverter {

    public static convert(soundcloudTracksPage: any) {

        let items: GenericTrackResult[] = []

        soundcloudTracksPage.map((item: any) => {

            const currentGenericTrackItem: GenericTrackResult = {
                platformName: "SoundCloud",
                albumName: "",
                resultType: "GenericTrackResult",
                platformId: item.id,
                title: item.title,
                creator:item.author.username,
                thumbnailUrl: item.thumbnail,
                playerFactoryName: "MultiPlatformPlayerFactory",
                platformPlayerUrl: item.url
            }

            items.push(currentGenericTrackItem)

        })

        return items;

    }

}