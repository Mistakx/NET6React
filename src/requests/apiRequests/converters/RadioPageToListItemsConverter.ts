import {GenericRadioResult} from "../../../models/apiResponses/GenericResults";
import {RadioSearchByIdResult} from "../../../models/apiResponses/RadioSearchResult";

export class RadioPageToListItemsConverter {

    public static convert(radioPage: RadioSearchByIdResult[]) {

        let items: GenericRadioResult[] = []

        radioPage.map((item) => {

            console.log(item.data)

            const currentGenericRadioItem: GenericRadioResult = {
                platformName: "Radio",
                resultType: "GenericRadioResult",
                platformId: item.data.id,
                title: item.data.title,
                creator: "",
                thumbnailUrl: "https://www.google.com/s2/favicons?domain=" + item.data.website + "&sz=256", // 0-640x640; 1-300x300; 2-64x64
                website: item.data.website,
                playerFactoryName: "MultiPlatformPlayerFactory",
                platformPlayerUrl: item.data.url,
                region: item.data.place + ", " + item.data.country,
            }

            items.push(currentGenericRadioItem)

        })

        return items;

    }

}