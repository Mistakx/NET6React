import {GenericRadioResult} from "../../../models/apiResponses/GenericResults";

export class RadioPageToListItemsConverter {

    public static convert(radioPage: any) {

        let items: GenericRadioResult[] = []

        //radioPage.hits.hits.map((item: any) => {
        radioPage.map((item: any) => {
            
            const currentGenericRadioItem: GenericRadioResult = {
                platformName: "Radio",
                resultType: "GenericRadioResult",
                platformId: item.id,
                title: item.title,
                creator: "",
                thumbnailUrl: "https://www.google.com/s2/favicons?domain="+item.website+"&sz=256", // 0-640x640; 1-300x300; 2-64x64
                website: item.website,
                playerFactoryName: "MultiPlatformPlayerFactory",
                platformPlayerUrl: item.url
            }

            items.push(currentGenericRadioItem)

        })

        return items;

    }

}