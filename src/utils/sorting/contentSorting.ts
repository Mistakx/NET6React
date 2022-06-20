import {GeneralizedResult} from "../../models/apiResponses/GenericResults";

export function compareContentTitle(a: GeneralizedResult, b: GeneralizedResult) {
    return a.title.localeCompare(b.title)
}

export function compareContentCreator(a: GeneralizedResult, b: GeneralizedResult) {
    return a.creator.localeCompare(b.creator)
}
export type ContentSortingOptions = "Custom Order" | "Order by Title" | "Order by Creator"