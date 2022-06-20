import {ContentSortingOptions} from "../../../utils/sorting/contentSorting";

export interface PlaylistTopBarState {

    order: ContentSortingOptions
    setOrder: (order: ContentSortingOptions) => void

}
